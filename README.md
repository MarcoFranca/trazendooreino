# Trazendo o Reino

Plataforma editorial de jornadas biblicas com Next.js App Router, TypeScript, TailwindCSS, shadcn/ui e Supabase.

## Visao rapida

- Landing page publica premium/editorial
- Area autenticada para jornadas e semanas
- Area administrativa para jornadas, semanas e colaboradores
- Supabase com migrations versionadas via CLI

## Instalacao

```bash
corepack pnpm@10 install
corepack pnpm@10 dev
```

## `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=https://qtgayxaidwycwlpkjcam.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_xxxxx
SUPABASE_SERVICE_ROLE_KEY=sb_secret_xxxxx
```

## Comandos

```bash
pnpm dev
pnpm lint
pnpm build
pnpm supabase:login
pnpm supabase:link
pnpm supabase:push
pnpm supabase:pull
pnpm supabase:reset
pnpm supabase:types
pnpm supabase:status
```

## Supabase

- Config CLI: `supabase/config.toml`
- Migration inicial: `supabase/migrations/20260513013220_initial_platform.sql`
- Migration de correcao do trigger de profiles: `supabase/migrations/20260513094500_fix_profiles_trigger.sql`
- Seed oficial: `supabase/seed.sql`
- Backfill opcional para usuarios antigos: `scripts/backfill-profiles.sql`
- Healthcheck local: `/api/health/supabase`

## Workflow de migrations

1. Faca login na CLI
2. Linke o projeto remoto
3. Rode `pnpm supabase:push`
4. Se ja existirem usuarios, rode o backfill manualmente no SQL Editor
5. Gere types com `pnpm supabase:types`

## Seed

- O seed oficial mantem a jornada `genesis`
- Cria as semanas `00` e `01`
- Define a semana `01` como atual

## Healthcheck

Em `development`, teste:

- [http://localhost:3000/api/health/supabase](http://localhost:3000/api/health/supabase)

Verifique especialmente:

- `hasProfilesTrigger`
- `missingProfilesCount`
- `profilesTableExists`
- `journeysTableExists`
- `weeksTableExists`

## Documentacao

- [Project Overview](C:\PROJETOS\trazendooreinomain\trazendooreino\docs\PROJECT_OVERVIEW.md)
- [Architecture](C:\PROJETOS\trazendooreinomain\trazendooreino\docs\ARCHITECTURE.md)
- [Routes](C:\PROJETOS\trazendooreinomain\trazendooreino\docs\ROUTES.md)
- [Database](C:\PROJETOS\trazendooreinomain\trazendooreino\docs\DATABASE.md)
- [Supabase Workflow](C:\PROJETOS\trazendooreinomain\trazendooreino\docs\SUPABASE_WORKFLOW.md)
- [Auth And Roles](C:\PROJETOS\trazendooreinomain\trazendooreino\docs\AUTH_AND_ROLES.md)
- [Admin](C:\PROJETOS\trazendooreinomain\trazendooreino\docs\ADMIN.md)
- [Journeys](C:\PROJETOS\trazendooreinomain\trazendooreino\docs\JOURNEYS.md)
- [Collaborators](C:\PROJETOS\trazendooreinomain\trazendooreino\docs\COLLABORATORS.md)
- [Design System](C:\PROJETOS\trazendooreinomain\trazendooreino\docs\DESIGN_SYSTEM.md)
- [Changelog](C:\PROJETOS\trazendooreinomain\trazendooreino\docs\CHANGELOG.md)
