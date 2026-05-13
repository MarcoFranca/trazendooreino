# Auth And Roles

## Login

- Página: `/login`
- Ação: `loginAction`
- Usa Supabase Auth com email e senha

## Cadastro

- Página: `/cadastro`
- Ação: `signupAction`
- Cria usuário no Supabase Auth
- Cria ou atualiza `profiles`

## Profiles

- Cada usuário autenticado deve ter um registro em `public.profiles`.
- O trigger `handle_new_user()` ajuda a manter isso em sincronia.

## Roles

- `user`
- `admin`

## Proteção de rotas

- `src/middleware.ts` protege áreas públicas e autenticadas.
- `requireUser()` protege páginas de app.
- `requireAdmin()` protege páginas de admin.

## Redirects

- Não autenticado em `/app` ou `/admin` vai para `/login`.
- Autenticado em `/login` ou `/cadastro` vai para `/app`.
- Não admin em `/admin` vai para `/app`.
