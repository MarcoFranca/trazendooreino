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
- `updated_at`
- `deleted_at`

### `weeks`

- `id`
- `journey_id`
- `week_number`
- `slug`
- `title`
- `reading`
- `summary`
- `content`
- `christ_focus`
- `kingdom_focus`
- `pdf_url`
- `video_url`
- `webinar_date`
- `release_at`
- `is_current`
- `is_published`
- `created_at`
- `updated_at`
- `deleted_at`

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

## Publicacao

- Jornada visivel: `journeys.is_published = true` e `journeys.deleted_at is null`
- Semana visivel: `weeks.is_published = true`, `weeks.release_at <= now()` e `weeks.deleted_at is null`
- Semana atual: `weeks.is_current = true`

## Soft delete

- Jornadas e semanas sao arquivadas com `deleted_at`
- Actions tambem despublicam itens arquivados

## Funcoes e triggers

- `public.is_admin()` verifica se `auth.uid()` possui `role = 'admin'`
- `public.handle_new_user()` cria ou reconcilia `public.profiles` apos insert em `auth.users`
- `public.set_updated_at()` atualiza `updated_at` em `journeys` e `weeks`
- `public.has_profiles_trigger()` ajuda no healthcheck local
- `public.auth_users_count()` e `public.count_missing_profiles()` apoiam diagnostico sem expor chaves

## RLS e policies

- Leitura de jornadas e semanas publicadas para usuarios autenticados
- Regras publicas consideram `deleted_at is null`
- Semanas publicas exigem `release_at <= now()`
- Admin com CRUD completo em jornadas e semanas
- Usuario pode inserir e ler apenas suas proprias perguntas
- Qualquer pessoa pode enviar aplicacao de colaborador
- Apenas admin pode ler e atualizar aplicacoes

## Storage

- Bucket: `weekly-pdfs`
- Publico no MVP
- Admins podem upload, update e delete
- Leitura publica liberada por URL

## Fonte de verdade

- Migration inicial: `supabase/migrations/20260513013220_initial_platform.sql`
- Ajuste do trigger de profiles: `supabase/migrations/20260513094500_fix_profiles_trigger.sql`
- Workflow editorial admin: `supabase/migrations/20260513103000_editorial_admin_workflow.sql`
- Seed oficial: `supabase/seed.sql`
