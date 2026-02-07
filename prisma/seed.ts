import { PrismaClient, PlanTier, SubscriptionStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const tenant = await prisma.tenant.create({
    data: {
      name: 'Flyp Demo',
      locale: 'pt-BR'
    }
  });

  const owner = await prisma.user.create({
    data: {
      name: 'Demo Owner',
      email: 'demo@flyp.com',
      password: 'demo123'
    }
  });

  await prisma.membership.create({
    data: {
      tenantId: tenant.id,
      userId: owner.id,
      role: 'OWNER'
    }
  });

  const plan = await prisma.plan.create({
    data: {
      name: 'Essence',
      tier: PlanTier.ESSENCE,
      price: 89.9,
      userLimit: 1,
      features: ['PDV básico', 'Estoque', 'Relatórios']
    }
  });

  await prisma.subscription.create({
    data: {
      tenantId: tenant.id,
      planId: plan.id,
      status: SubscriptionStatus.ACTIVE,
      provider: 'stripe',
      currentPeriodEnd: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
    }
  });

  const customers = await Promise.all(
    Array.from({ length: 10 }).map((_, index) =>
      prisma.customer.create({
        data: {
          tenantId: tenant.id,
          name: `Cliente ${index + 1}`,
          email: `cliente${index + 1}@flyp.com`
        }
      })
    )
  );

  const products = await Promise.all(
    Array.from({ length: 12 }).map((_, index) =>
      prisma.product.create({
        data: {
          tenantId: tenant.id,
          name: `Produto ${index + 1}`,
          type: index % 2 === 0 ? 'Produto' : 'Serviço',
          price: 100 + index * 10
        }
      })
    )
  );

  const suppliers = await Promise.all(
    Array.from({ length: 5 }).map((_, index) =>
      prisma.supplier.create({
        data: {
          tenantId: tenant.id,
          name: `Fornecedor ${index + 1}`,
          email: `fornecedor${index + 1}@flyp.com`
        }
      })
    )
  );

  await Promise.all(
    Array.from({ length: 8 }).map((_, index) =>
      prisma.sale.create({
        data: {
          tenantId: tenant.id,
          customerId: customers[index % customers.length].id,
          total: 500 + index * 120,
          status: index % 2 === 0 ? 'Pago' : 'Pendente',
          items: {
            create: [
              {
                productId: products[index % products.length].id,
                quantity: 2,
                price: products[index % products.length].price
              }
            ]
          }
        }
      })
    )
  );

  await prisma.accountReceivable.create({
    data: {
      tenantId: tenant.id,
      customerId: customers[0].id,
      amount: 3200,
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5),
      status: 'Em aberto'
    }
  });

  await prisma.accountPayable.create({
    data: {
      tenantId: tenant.id,
      supplierId: suppliers[0].id,
      amount: 2100,
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
      status: 'Em aberto'
    }
  });

  await prisma.cashEntry.create({
    data: {
      tenantId: tenant.id,
      amount: 5400,
      type: 'Entrada'
    }
  });

  await prisma.stockMovement.create({
    data: {
      tenantId: tenant.id,
      productId: products[0].id,
      quantity: -2,
      reason: 'Venda'
    }
  });

  await prisma.moduleAccess.createMany({
    data: [
      { tenantId: tenant.id, module: 'PDV', enabled: true },
      { tenantId: tenant.id, module: 'Estoque', enabled: true },
      { tenantId: tenant.id, module: 'Financeiro', enabled: false }
    ]
  });

  await prisma.auditLog.create({
    data: {
      tenantId: tenant.id,
      userId: owner.id,
      action: 'Seed inicial'
    }
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
