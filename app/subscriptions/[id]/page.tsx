import { prisma } from "@/lib/prisma";
import { Label } from "@/components/ui/Label";

export default async function SubscriptionDetails({
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
      <form
        action="#"
        className="space-y-6 bg-gray-900/30 p-8 rounded-2xl border border-gray-800"
      >
        <h1 className="text-2xl font-bold mb-8 text-white">
          {sub.subscriptionName}
        </h1>
        <div className="grid grid-cols-2 gap-8 p-8 border border-gray-800 rounded-xl bg-gray-900/30">
          <Label title="Service Provider">{sub.subscriptionProvider}</Label>
          <Label title="Category">
            <span className="px-2 py-1 rounded bg-rose-500/10 text-rose-400 text-xs">
              {sub.subscriptionCategory}
            </span>
          </Label>
          <Label title="Payment Amount">
            ${sub.subscriptionPaymentAmount} NZD
          </Label>
          <Label title="Interval/Frequency">
            Every {sub.subscriptionPaymentInterval} days
          </Label>
          <Label title="Last Payment Made">
            {sub.subscriptionLastPaymentDate}
          </Label>
          <Label title="Next Due">{sub.subscriptionNextDueDate}</Label>
        </div>
      </form>
    </main>
  );
}
