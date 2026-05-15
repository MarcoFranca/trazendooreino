# Admin

## O que o admin pode fazer

- Ver dashboard editorial em `/admin`
- Ver todas as jornadas cadastradas
- Criar, editar, publicar, despublicar e arquivar jornadas
- Definir `release_at` da jornada
- Ver todas as semanas cadastradas
- Criar, editar, publicar, despublicar e arquivar semanas
- Definir `release_at` da semana
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
3. Definir `release_at` se a jornada deve aparecer como `Em breve`
4. Marcar `is_published` quando a jornada puder aparecer para usuarios
5. Usar soft delete para arquivar, preenchendo `deleted_at`

Estados editoriais de jornada:

- `rascunho`: `is_published = false`
- `programada`: `is_published = true` e `release_at > now()`
- `publicada`: `is_published = true` e `release_at is null` ou `release_at <= now()`

Na area do usuario:

- jornadas futuras aparecem como `Em breve`
- jornadas sem semanas abertas aparecem bloqueadas
- jornadas abertas usam `cover_image` como base do hero autenticado quando disponivel

## Fluxo de semana

1. Criar semana em `/admin/semanas/nova`
2. Selecionar jornada
3. Preencher `week_number`, `slug`, `title`, leituras, resumo e conteudo
4. Definir `release_at`
5. Informar `pdf_url` ou enviar PDF oficial pela tela de edicao
6. Informar `video_url`, se houver
7. Publicar a semana

Estados editoriais de semana:

- `rascunho`: `is_published = false`
- `programada`: `is_published = true` e `release_at > now()`
- `publicada`: `is_published = true` e `release_at <= now()`
- `atual`: `is_current = true`

Na area do usuario:

- semanas liberadas ficam clicaveis
- a semana atual aparece destacada
- semanas futuras ficam bloqueadas com data
- a pagina completa respeita a ordem `PDF > video > conteudo`

## Semana atual

- Marcada por `weeks.is_current = true`
- Ao marcar uma semana como atual, as outras semanas da mesma jornada sao desmarcadas
- O seed inicial marca `genesis` semana `01` como atual

## Upload de PDF

- Bucket: `weekly-pdfs`
- MVP: bucket publico para facilitar download direto
- A action `uploadWeekPdfAction` envia o arquivo e grava a URL publica em `weeks.pdf_url`
- Limite configurado na migration: 50 MB
- Tipo permitido: `application/pdf`

## Seed editorial atual

O projeto agora nasce com:

- 10 jornadas oficiais da plataforma
- `genesis` aberta
- as outras jornadas programadas
- semanas `00` a `14` de `genesis`
- `00` e `01` liberadas
- `02` a `14` programadas

## Limitacoes atuais

- O bucket `weekly-pdfs` esta publico no MVP
- O controle fino de leitura por semana publicada ainda depende da URL publica gravada em `pdf_url`
- Nao ha editor rico de conteudo
- Nao ha auditoria de publicacoes
