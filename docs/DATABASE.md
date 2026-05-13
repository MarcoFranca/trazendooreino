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

## Relações

- `profiles.id -> auth.users.id`
- `weeks.journey_id -> journeys.id`
- `week_questions.week_id -> weeks.id`
- `week_questions.user_id -> profiles.id`

## RLS e policies

- Leitura de jornadas e semanas publicadas para usuários autenticados.
- Admin com acesso total a jornadas e semanas.
- Usuário pode inserir e ler apenas suas próprias perguntas.
- Qualquer pessoa pode enviar aplicação de colaborador.
- Apenas admin pode ler e atualizar aplicações.

## Seed inicial

- Jornada `genesis`
- Semanas `00` e `01`
- Semana `01` marcada como atual
- URLs placeholder para PDF e vídeo

## Fonte de verdade

- Migration inicial: `supabase/migrations/20260513013220_initial_platform.sql`
- Seed oficial: `supabase/seed.sql`
