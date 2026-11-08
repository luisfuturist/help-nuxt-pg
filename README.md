# help-nuxt-pg

Minimal example of integrating Nuxt 3 with PostgreSQL.

## Stack

- Nuxt 3 (Vue 3 + TypeScript)
- `pg` driver via `server/utils/db.ts`
- Docker Compose for a local Postgres instance

## Setup

```bash
pnpm install
docker compose up -d    # starts Postgres
pnpm dev                 # http://localhost:3000
```

## API

`GET /api/user` - returns all rows from the `users` table as JSON.
