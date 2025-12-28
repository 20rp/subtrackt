import { prisma } from "./lib/prisma";

async function main() {
  const allSubscriptions = await prisma.subscriptions.findMany();
  console.log("All subscriptions:>", JSON.stringify(allSubscriptions, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
