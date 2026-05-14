# Supabase Workflow

## Instalacao da CLI

A CLI esta instalada como dependencia de desenvolvimento do projeto.

## Login

```bash
pnpm supabase:login
```

## Link do projeto

```bash
pnpm supabase:link
```

Esse script usa o project ref `qtgayxaidwycwlpkjcam`.

## Migrations

- Crie novas migrations com `supabase migration new <nome>`
- Commits estruturais de banco devem sempre entrar em `supabase/migrations/`
- Nao editar `supabase/schema.sql` como fonte principal
- O fluxo de auth/profile depende da migration `20260513094500_fix_profiles_trigger.sql`
- O admin editorial depende da migration `20260513103000_editorial_admin_workflow.sql`

## Push

```bash
pnpm supabase:push
```

Aplica migrations pendentes ao projeto linkado. Nao e executado automaticamente pelo agente.

## Pull

```bash
pnpm supabase:pull
```

Util para trazer mudancas remotas quando necessario.

## Reset local

```bash
pnpm supabase:reset
```

Reseta o ambiente local Supabase e reaplica migrations + seed.

## Geracao de types

```bash
pnpm supabase:types
```

Gera `src/lib/database.types.ts` a partir do projeto linkado. Enquanto o projeto ainda nao estiver linkado, o repositorio mantem um placeholder tipado minimo para evitar quebra de build.

## Cuidados

- Publishable key em `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Secret key em `SUPABASE_SERVICE_ROLE_KEY`
- Secret key nunca em client component
- Nao rodar `db push` remoto sem revisar migrations e seed

## Storage weekly-pdfs

- A migration cria o bucket `weekly-pdfs`
- O bucket fica publico no MVP para facilitar download direto
- Admins enviam PDFs pela rota `/admin/semanas/[id]/editar`
- A URL publica gerada e salva em `weeks.pdf_url`
- Se a criacao automatica do bucket falhar por permissao do projeto, crie manualmente um bucket publico chamado `weekly-pdfs`

## Backfill de usuarios existentes

Depois de aplicar migrations em um projeto que ja possui usuarios:

1. Rode `pnpm exec supabase db push`
2. Abra o SQL Editor do Supabase
3. Execute `scripts/backfill-profiles.sql`
4. Confira `/api/health/supabase` em development

## Diagnostico rapido

- `missingProfilesCount > 0` indica usuarios em `auth.users` sem correspondente em `public.profiles`
- `hasProfilesTrigger = false` indica migration nao aplicada ou trigger ausente
- Se paginas server-side renderizarem estados vazios inesperados, valide schema, trigger e backfill antes de depurar UI
