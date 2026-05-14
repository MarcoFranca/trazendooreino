# Admin

## O que o admin pode fazer

- Ver dashboard editorial em `/admin`
- Criar, editar, publicar, despublicar e arquivar jornadas
- Criar, editar, publicar, despublicar e arquivar semanas
- Definir `release_at` para liberacao por data
- Marcar uma semana como `is_current`
- Salvar `pdf_url` manualmente
- Enviar PDF oficial para o bucket `weekly-pdfs`
- Salvar `video_url`
- Ver aplicacoes de colaboradores
- Aprovar ou rejeitar aplicacoes

## Areas

- `/admin`
- `/admin/jornadas`
- `/admin/jornadas/nova`
- `/admin/jornadas/[id]/editar`
- `/admin/jornadas/[id]/semanas`
- `/admin/semanas`
- `/admin/semanas/nova`
- `/admin/semanas/[id]/editar`
- `/admin/colaboradores`

## Fluxo de jornada

1. Criar jornada em `/admin/jornadas/nova`
2. Preencher `title`, `slug`, `subtitle`, `description`, `cover_image`
3. Marcar `is_published` quando a jornada puder aparecer para usuarios
4. Usar soft delete para arquivar, preenchendo `deleted_at`

Uma jornada aparece para usuarios quando:

- `is_published = true`
- `deleted_at is null`

## Fluxo de semana

1. Criar semana em `/admin/semanas/nova`
2. Selecionar jornada
3. Preencher `week_number`, `slug`, `title`, leituras, resumo e conteudo
4. Definir `release_at`
5. Informar `pdf_url` ou enviar PDF oficial pela tela de edicao
6. Informar `video_url`, se houver
7. Publicar a semana

Uma semana aparece para usuarios quando:

- `is_published = true`
- `release_at <= now()`
- `deleted_at is null`

## Semana atual

- Marcada por `weeks.is_current = true`
- Ao marcar uma semana como atual, as outras semanas da mesma jornada sao desmarcadas

## Upload de PDF

- Bucket: `weekly-pdfs`
- MVP: bucket publico para facilitar download direto
- A action `uploadWeekPdfAction` envia o arquivo e grava a URL publica em `weeks.pdf_url`
- Limite configurado na migration: 50 MB
- Tipo permitido: `application/pdf`

## Limitacoes atuais

- O bucket `weekly-pdfs` esta publico no MVP
- O controle fino de leitura por semana publicada ainda depende da URL publica gravada em `pdf_url`
- Nao ha editor rico de conteudo
- Nao ha auditoria de publicacoes
