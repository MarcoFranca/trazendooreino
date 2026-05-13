# Architecture

## Stack

- Next.js 16 App Router
- TypeScript
- TailwindCSS v4
- shadcn/ui
- Framer Motion
- Supabase Auth, Database e Storage

## Organização principal

- `src/app/`: rotas App Router, layouts, páginas e route handlers.
- `src/app/actions/`: server actions para auth, jornadas, admin e colaboradores.
- `src/components/`: componentes de UI, seções e blocos reutilizáveis.
- `src/lib/`: integrações, helpers, DAL e tipos.
- `supabase/`: config CLI, migrations e seed.
- `docs/`: documentação viva do projeto.

## Server e Client Components

- Preferência por Server Components para leitura de dados e proteção de rotas.
- Client Components usados apenas quando a interação exige browser runtime.
- Auth e DAL ficam server-side.

## Server Actions

- Login, cadastro e logout.
- Envio de perguntas.
- Aplicação de colaborador.
- CRUD inicial de admin para jornadas, semanas e status de aplicações.

## Supabase

- Browser client com Publishable key.
- Server client com Publishable key para auth e sessão.
- Secret key restrita a server-only helpers e healthcheck administrativo.
- Banco versionado por migrations em `supabase/migrations/`.

## Bibliotecas principais

- `@supabase/ssr`
- `@supabase/supabase-js`
- `framer-motion`
- `lucide-react`
- `class-variance-authority`
- `tailwind-merge`
