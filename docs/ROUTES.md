# Routes

## Públicas

- `/`
- `/login`
- `/cadastro`
- `/colaborar`
- `/genesis`
- `/genesis/00`
- `/genesis/[week]`

## Autenticadas

- `/app`
- `/app/jornadas`
- `/app/jornadas/[slug]`
- `/app/jornadas/[slug]/[week]`

## Admin

- `/admin`
- `/admin/jornadas`
- `/admin/semanas`
- `/admin/colaboradores`

## Healthcheck

- `/api/health/supabase`

## Regras

- Middleware protege `/app`, `/admin`, `/login` e `/cadastro`.
- Usuário não autenticado é redirecionado para `/login`.
- Usuário autenticado é redirecionado de `/login` e `/cadastro` para `/app`.
- Admin é validado server-side via `profiles.role = 'admin'`.
