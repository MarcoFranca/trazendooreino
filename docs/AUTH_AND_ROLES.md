# Auth And Roles

## Login

- Pagina: `/login`
- Acao: `loginAction`
- Usa Supabase Auth com email e senha

## Cadastro

- Pagina: `/cadastro`
- Acao: `signupAction`
- Cria usuario no Supabase Auth
- Envia `name` em `options.data`
- Se a sessao nascer imediatamente, o app garante `profiles` por fallback server-side
- Se a confirmacao de email estiver ativa, a pessoa e redirecionada com mensagem para confirmar o email antes de entrar

## auth.users e public.profiles

- `auth.users` e a fonte de verdade da autenticacao
- `public.profiles` guarda nome, email, role e dados de acesso do produto
- Cada usuario autenticado deve ter um registro correspondente em `public.profiles`
- A migration `20260513094500_fix_profiles_trigger.sql` recria `public.handle_new_user()` com `security definer` e `search_path` seguro
- O trigger `on_auth_user_created` roda `after insert on auth.users` para criar ou reconciliar o profile
- O helper `ensureProfileForUser()` existe como rede de seguranca para sessao valida com profile ausente

## Backfill

- Usuarios antigos podem ficar sem `public.profiles` se foram criados antes do trigger correto
- O script `scripts/backfill-profiles.sql` insere apenas profiles faltantes com `on conflict (id) do nothing`
- O backfill nao e executado automaticamente pelo projeto

## Roles

- `user`
- `admin`

Para promover alguem a admin:

```sql
update public.profiles
set role = 'admin'
where email = 'seu-email@dominio.com';
```

## Protecao de rotas

- `src/middleware.ts` protege areas publicas e autenticadas
- `requireUser()` protege paginas de app e redireciona para `/login` se nao houver sessao
- `requireAdmin()` protege paginas de admin e redireciona para `/app` se o role nao for `admin`
- `getCurrentProfile()` nunca deve quebrar se o profile nao existir; ele retorna `null` ou tenta reconciliar via `ensureProfileForUser()`

## Redirects

- Nao autenticado em `/app` ou `/admin` vai para `/login`
- Autenticado em `/login` ou `/cadastro` vai para `/app` quando a sessao ja existe
- Nao admin em `/admin` vai para `/app`

## Diagnostico de render server-side

- Se uma pagina server-side acusar erro generico de render, verifique primeiro se o schema foi aplicado e se o usuario possui `public.profiles`
- Em desenvolvimento, abra `/api/health/supabase` para conferir tabelas, trigger e contagens
- Se `missingProfilesCount` for maior que zero, rode o backfill antes de continuar
- Se o cadastro cria `auth.users` mas nao cria `public.profiles`, aplique a migration nova e valide `hasProfilesTrigger`
