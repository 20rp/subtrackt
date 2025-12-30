import { prisma } from "../lib/prisma";

export default async function Page() {
  const allSubs = await prisma.subscriptions.findMany();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Subscriptions</h1>
      <ul>
        {allSubs.map((sub) => (
          <li key={sub.subscriptionID}>
            {sub.subscriptionName} - ${sub.subscriptionPaymentAmount}
          </li>
        ))}
      </ul>
    </main>
  );
}
