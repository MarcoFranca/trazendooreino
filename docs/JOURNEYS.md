# Journeys

## Conceito de jornada

Uma jornada e um arco editorial de formacao biblica com capa, descricao, semanas, materiais e uma janela propria de abertura.

## Conceito de semana

Cada semana carrega:

- leitura principal
- resumo
- conteudo editorial
- foco em Cristo
- foco no Reino
- PDF oficial
- video ou webinar gravado
- formulario de perguntas

## Seed atual da plataforma

As jornadas cadastradas no seed oficial sao:

- `genesis` · Gênesis: Do Éden à Promessa
- `exodo` · Êxodo: Da Escravidão à Presença
- `tora` · Torá: Santidade, Deserto e Aliança
- `terra-prometida` · Terra Prometida: Conquista, Queda e Redenção
- `reino-e-exilio` · Reino e Exílio: Davi, Idolatria, Profetas e Juízo
- `escritos` · Escritos: Sabedoria, Louvor e Sofrimento
- `profetas` · Profetas: Juízo, Nova Aliança e Esperança Messiânica
- `evangelhos` · Evangelhos: O Rei chegou
- `atos-e-cartas` · Atos e Cartas: O Reino em missão
- `apocalipse` · Apocalipse: A consumação do Reino

No momento:

- `genesis` aparece aberta
- as demais jornadas aparecem para o usuario como `Em breve`
- todas as jornadas aparecem para o admin

## Jornada acessivel vs bloqueada

Uma jornada e considerada acessivel para o usuario quando:

- `is_published = true`
- `deleted_at is null`
- `release_at is null` ou `release_at <= now()`

Uma jornada pode aparecer para o usuario mesmo sem acesso completo quando:

- `is_published = true`
- `deleted_at is null`
- `release_at > now()`

Nesse caso, a UI mostra card bloqueado ou programado com data de abertura.

## Semana acessivel vs futura

Uma semana aparece na jornada do usuario quando:

- `is_published = true`
- `deleted_at is null`

Uma semana fica acessivel somente quando:

- `release_at <= now()`

Quando `release_at > now()`:

- a semana aparece no mapa da jornada
- o card fica bloqueado
- a tela da semana mostra estado premium de bloqueio
- o conteudo completo nao e exibido

## Semana atual

- Controlada por `weeks.is_current`
- Apenas uma semana por jornada deve permanecer com `is_current = true`
- O seed inicial marca a semana `01` de `genesis` como atual

## Seed de Gênesis

O seed oficial cadastra as semanas `00` a `14` de `genesis`.

Regras atuais:

- Semana `00`: liberada
- Semana `01`: liberada e atual
- Semanas `02` a `14`: publicadas, mas com `release_at` futuro

Isso permite:

- admin visualizar todo o mapa editorial desde agora
- usuario visualizar o mapa completo com bloqueios reais
- area autenticada liberar o conteudo conforme a data

## Semana 00 publica

- Rota: `/genesis/00`
- Funcao: estabelecer a lente de leitura da temporada como estudo completo
- Fonte editorial: conteudo integral da Semana 00, estruturado em `src/lib/genesis-week-00.ts`

## PDF imprimivel

- Rota: `/genesis/00/pdf`
- Funcao: oferecer o mesmo estudo completo em formato de artefato editorial para impressao ou salvamento como PDF pelo navegador
- Fluxo atual:
  - abrir a pagina
  - clicar em `Baixar em PDF`
  - usar `window.print()`
  - salvar como PDF no dialogo do navegador

## Recursos

- `pdf_url`
- `video_url`
- `webinar_date`
- `release_at`
- `content`

## Perguntas

- Salvas em `week_questions`
- O usuario autenticado so le as proprias perguntas
