# Bgen Fullstack Web App

Fullstack starter using **Next.js (React + TypeScript)** and **PostgreSQL** via **Prisma**.

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Copy the example env file and adjust if needed:

```bash
cp .env.example .env
```

`DATABASE_URL` should point at your local Postgres instance (the example matches `docker-compose.yml`).

### 3. Start Postgres with Docker

```bash
docker compose up -d db
```

### 4. Run Prisma migrations

After Postgres is running and `.env` is configured:

```bash
npx prisma migrate dev
```

You can also regenerate the Prisma client with:

```bash
npm run db:generate
```

### 5. Start the development server

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Structure

- `app/` – Next.js App Router pages, layouts, components, and API routes.
- `prisma/` – Prisma schema and migrations (created after `prisma migrate dev`).
- `src/lib/db.ts` – Prisma client singleton used by API routes and server components.

