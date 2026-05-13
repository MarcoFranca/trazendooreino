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
