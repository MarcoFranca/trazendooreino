# Supabase Workflow

## Instalação da CLI

A CLI está instalada como dependência de desenvolvimento do projeto.

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

- Crie novas migrations com `supabase migration new <nome>`.
- Commits estruturais de banco devem sempre entrar em `supabase/migrations/`.
- Não editar `supabase/schema.sql` como fonte principal.

## Push

```bash
pnpm supabase:push
```

Aplica migrations pendentes ao projeto linkado. Não é executado automaticamente pelo agente.

## Pull

```bash
pnpm supabase:pull
```

Útil para trazer mudanças remotas quando necessário.

## Reset local

```bash
pnpm supabase:reset
```

Reseta o ambiente local Supabase e reaplica migrations + seed.

## Geração de types

```bash
pnpm supabase:types
```

Gera `src/lib/database.types.ts` a partir do projeto linkado.
Enquanto o projeto ainda não estiver linkado, o repositório mantém um placeholder tipado mínimo para evitar quebra de build.

## Cuidados

- Publishable key em `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Secret key em `SUPABASE_SERVICE_ROLE_KEY`.
- Secret key nunca em client component.
- Não rodar `db push` remoto sem revisar migrations e seed.
