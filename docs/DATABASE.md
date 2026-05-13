# Database

## Tabelas

### `profiles`

- `id`
- `name`
- `email`
- `role`
- `created_at`

### `journeys`

- `id`
- `slug`
- `title`
- `subtitle`
- `description`
- `cover_image`
- `is_published`
- `created_at`

### `weeks`

- `id`
- `journey_id`
- `week_number`
- `title`
- `reading`
- `summary`
- `christ_focus`
- `kingdom_focus`
- `pdf_url`
- `video_url`
- `webinar_date`
- `release_at`
- `is_current`
- `is_published`
- `created_at`

### `week_questions`

- `id`
- `week_id`
- `user_id`
- `question`
- `created_at`

### `collaborator_applications`

- `id`
- `name`
- `email`
- `whatsapp`
- `church`
- `city`
- `is_christian`
- `available_for_meetings`
- `kingdom_purpose`
- `skills`
- `why_join`
- `status`
- `created_at`

## Relacoes

- `profiles.id -> auth.users.id`
- `weeks.journey_id -> journeys.id`
- `week_questions.week_id -> weeks.id`
- `week_questions.user_id -> profiles.id`

## Funcoes e trigger

- `public.is_admin()` verifica se `auth.uid()` possui `role = 'admin'`
- `public.handle_new_user()` cria ou reconcilia `public.profiles` apos insert em `auth.users`
- `public.has_profiles_trigger()` ajuda no healthcheck local
- `public.auth_users_count()` e `public.count_missing_profiles()` apoiam diagnostico sem expor chaves
- Trigger: `on_auth_user_created after insert on auth.users`

## RLS e policies

- Leitura de jornadas e semanas publicadas para usuarios autenticados
- Admin com acesso total a jornadas e semanas
- Usuario pode inserir e ler apenas suas proprias perguntas
- Qualquer pessoa pode enviar aplicacao de colaborador
- Apenas admin pode ler e atualizar aplicacoes

## Seed inicial

- Jornada `genesis`
- Semanas `00` e `01`
- Semana `01` marcada como atual
- URLs placeholder para PDF e video

## Backfill de profiles

- Script: `scripts/backfill-profiles.sql`
- Uso: inserir profiles faltantes para usuarios ja existentes em `auth.users`
- Estrategia: `insert ... select ... on conflict (id) do nothing`

## Fonte de verdade

- Migration inicial: `supabase/migrations/20260513013220_initial_platform.sql`
- Ajuste do trigger de profiles: `supabase/migrations/20260513094500_fix_profiles_trigger.sql`
- Seed oficial: `supabase/seed.sql`
