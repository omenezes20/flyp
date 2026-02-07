# Flyp ERP (SaaS)

Monorepo com frontend, backend (API routes) e banco de dados para o Flyp ERP. Inclui tema claro/escuro, i18n (pt-BR/en/es), autenticação demo, RBAC base, módulos e seed inicial.

## Stack
- Next.js 14 (App Router) + TypeScript
- TailwindCSS + shadcn/ui tokens
- next-intl (pt-BR, en, es)
- next-themes (light/dark/system)
- Prisma + PostgreSQL
- NextAuth (Credentials)
- Stripe + Mercado Pago (placeholders)

## Ambiente
Crie o arquivo `.env` baseado no `.env.example`.

```bash
cp .env.example .env
```

## Instalação
```bash
npm install
```

## Banco de dados
```bash
npx prisma generate
npx prisma migrate dev
npx prisma db seed
```

## Rodar local
```bash
npm run dev
```

## Stripe CLI (webhooks)
```bash
stripe login
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

## Mercado Pago
Use o sandbox e configure o webhook para:
```
http://localhost:3000/api/mercadopago/webhook
```

## Notas
- As chaves Stripe/Mercado Pago estão como placeholders em `.env.example`.
- O login demo está em `demo@flyp.com / demo123`.
