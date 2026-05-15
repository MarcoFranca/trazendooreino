# Changelog

## 2026-05-12

- Criacao da base da plataforma com Supabase Auth, Database e areas autenticada/admin
- Ajuste da integracao para o novo modelo de Publishable key e Secret key do Supabase
- Criacao do endpoint de healthcheck `/api/health/supabase`
- Adocao do workflow oficial com Supabase CLI e migrations versionadas
- Criacao da pasta `docs/` como documentacao viva do projeto
- Atualizacao de `README.md` e `AGENTS.md` para refletir o novo processo estrutural
- Nova migration para corrigir `handle_new_user()`, recriar o trigger `on_auth_user_created` e diagnosticar profiles faltantes
- Criacao de `scripts/backfill-profiles.sql` para reconciliar usuarios antigos de `auth.users` com `public.profiles`
- Endurecimento dos helpers de auth e das paginas server-side para evitar erro bruto quando profile, journeys ou weeks estiverem ausentes

## 2026-05-13

- Reestruturacao completa da Semana 00 como experiencia editorial aprofundada em `/genesis/00`
- Criacao da rota `/genesis/00/pdf` como material premium imprimivel com `window.print()`
- Criacao de componentes reutilizaveis para PDFs editoriais
- Adicao de estilos globais de impressao para A4, ocultacao de chrome do site e controle de page break
- Atualizacao da documentacao para o padrao de semanas publicas e PDFs futuros
- Expansao da Semana 00 para carregar o estudo integral do material-base, incluindo metodo semanal, leituras complementares, mapa completo da temporada, exercicios, reflexoes e oracao final
- Evolucao do admin para gestao editorial com rotas de criacao/edicao, soft delete, publicacao, release por data, semana atual e upload de PDF oficial em `weekly-pdfs`

## 2026-05-14

- Migracao do mapa mockado de jornadas para dados reais em `supabase/seed.sql`
- Seed oficial agora cadastra as 10 jornadas da plataforma e as semanas `00` a `14` de `genesis`
- Nova migration para adicionar `journeys.release_at` e ajustar a leitura autenticada de jornadas e semanas futuras
- Separacao clara entre loaders de admin e loaders de usuario em `src/lib/journeys.ts`
- Area autenticada agora mostra jornadas abertas e jornadas `Em breve` com estado bloqueado premium
- Pagina da jornada agora exibe semanas liberadas e semanas futuras com data programada
- Pagina da semana agora bloqueia o conteudo completo quando `release_at` ainda nao chegou
- Pagina publica `/genesis` passou a respeitar dados do banco quando disponiveis, com fallback editorial
- Criacao de `src/components/journey/status-badge.tsx` para padronizar estados como atual, liberada, em breve, programada, rascunho e bloqueada
- Adicao do script `pnpm supabase:seed:remote` e documentacao para executar o seed remoto explicitamente via CLI
