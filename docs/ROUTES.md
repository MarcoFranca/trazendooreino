# Routes

## Publicas

- `/`
- `/login`
- `/cadastro`
- `/colaborar`
- `/genesis`
- `/genesis/00`
- `/genesis/[week]`

## Regra das rotas publicas de Gênesis

- `/genesis` e a pagina editorial e publica da jornada
- `/genesis/00` continua como semana publica editorial completa
- `/genesis/[week]` redireciona para `/app/jornadas/genesis/[week]`

Com isso:

- a jornada publica apresenta
- a area autenticada entrega a experiencia real
- evitamos duplicar manutencao de paginas completas de semana

## Autenticadas

- `/app`
- `/app/jornadas`
- `/app/jornadas/[slug]`
- `/app/jornadas/[slug]/[week]`

## Regras da area autenticada

- `/app/jornadas` mostra todas as jornadas nao deletadas
- jornadas abertas ficam acessiveis
- jornadas futuras ou sem semanas abertas aparecem bloqueadas
- `/app/jornadas/[slug]` e a pagina real da jornada
- `/app/jornadas/[slug]/[week]` e a pagina real da semana

## Ordem da semana autenticada

Na pagina real da semana, a leitura acontece nesta ordem:

1. PDF
2. Video
3. Conteudo editorial

Depois disso, permanecem os focos em Cristo e Reino e o envio de perguntas.

## Admin

- `/admin`
- `/admin/jornadas`
- `/admin/semanas`
- `/admin/colaboradores`

## Healthcheck

- `/api/health/supabase`

## Regras de acesso

- Middleware protege `/app`, `/admin`, `/login` e `/cadastro`
- Usuario nao autenticado e redirecionado para `/login`
- Usuario autenticado e redirecionado de `/login` e `/cadastro` para `/app`
- Admin e validado server-side via `profiles.role = 'admin'`
