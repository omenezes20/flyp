import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Add your seeding logic here
  // Example: await prisma.user.create({ data: { name: 'Alice', email: 'alice@example.com' } });

  console.log('Seeding completed!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });