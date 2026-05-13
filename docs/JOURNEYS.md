# Journeys

## Conceito de jornada

Uma jornada e um arco editorial de formacao biblica com capa, descricao, semanas e materiais.

## Conceito de semana

Cada semana carrega:

- leitura principal
- resumo
- foco em Cristo
- foco no Reino
- PDF complementar
- video ou webinar gravado
- formulario de perguntas

## Jornada inicial

- `genesis`
- Titulo: `Genesis: Do Eden a Promessa`

## Semana atual

- Controlada por `weeks.is_current`
- Apenas uma semana por jornada deve ser marcada como atual

## Semana 00 publica

- Rota: `/genesis/00`
- Funcao: estabelecer a lente de leitura da temporada
- Estrutura atual:
  - hero editorial
  - tese central
  - leituras principais e de apoio
  - Cristo como chave da leitura
  - Escritura como regra
  - Evangelho como protecao
  - Reino como mensagem
  - graca, arrependimento e transformacao
  - filtros da jornada
  - exercicios, reflexoes e oracao
  - CTA para a Semana 01

## PDF imprimivel

- Rota: `/genesis/00/pdf`
- Funcao: oferecer um artefato editorial para impressao ou salvamento como PDF pelo navegador
- Fluxo atual:
  - abrir a pagina
  - clicar em `Baixar em PDF`
  - usar `window.print()`
  - salvar como PDF no dialogo do navegador

## Padrao editorial para PDFs futuros

- capa contemplativa
- sumario visual
- secoes com ritmo de livro, nao de dashboard
- callouts editoriais
- perguntas com espaco para resposta
- oracao final
- contracapa
- estilo de impressao em A4 com page breaks controlados

## Recursos

- `pdf_url`
- `video_url`
- `webinar_date`

## Perguntas

- Salvas em `week_questions`
- O usuario autenticado so le as proprias perguntas
