import { prisma } from "@/lib/prisma";
import { SubscriptionDetails } from "./SubscriptionDetails";

export default async function SubscriptionItem({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const subId = parseInt(resolvedParams.id);
  const sub = await prisma.subscriptions.findUnique({
    where: { subscriptionID: subId },
  });

  if (!sub) return <div>Subscription not found</div>;

  return (
    <main className="max-w-xl mx-auto p-8">
      <SubscriptionDetails sub={sub} />
    </main>
  );
}
