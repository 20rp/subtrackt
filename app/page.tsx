import Link from "next/link";
import { prisma } from "../lib/prisma";
import { Button } from "@/components/ui/Button";

export default async function Page() {
  const allSubs = await prisma.subscriptions.findMany();

  return (
    <main className="p-4 md:p-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-8 text-white">SubtrackT</h1>
          <h2 className="text-gray-300 text-md">
            Lightweight Personal Subscription Manager
          </h2>
          <p className="text-gray-500 text-sm">
            You have {allSubs.length} active subscriptions
          </p>
        </div>
      </div>
      <div className="border border-gray-800 rounded-xl overflow-hidden bg-gray-900/50">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-gray-400 border-b border-gray-800 uppercase text-[10px] tracking-widest">
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Provider</th>
              <th className="px-6 py-4">Payment Amount</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Interval</th>
              <th className="px-6 py-4">Last Payment</th>
              <th className="px-6 py-4">Next Due</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {allSubs.map((sub) => (
              <tr
                key={sub.subscriptionID}
                className="hover:bg-gray-800/30 transition-colors"
              >
                <td className="px-6 py-4 font-medium text-white">
                  <Link
                    href={`/subscriptions/${sub.subscriptionID}`}
                    className="hover:text-rose-500 transition-colors font-medium cursor-pointer"
                  >
                    {sub.subscriptionName}
                  </Link>
                </td>
                <td className="px-6 py-4 text-gray-400">
                  {sub.subscriptionProvider}
                </td>
                <td className="px-6 py-4 text-right font-mono text-rose-400">
                  ${sub.subscriptionPaymentAmount?.toFixed(2) ?? "0.00"}
                </td>
                <td className="px-6 py-4 text-gray-400">
                  {sub.subscriptionCategory ?? "Uncategorised"}
                </td>
                <td className="px-6 py-4 text-gray-400">
                  {sub.subscriptionPaymentInterval}
                </td>
                <td className="px-6 py-4 text-gray-400">
                  {sub.subscriptionLastPaymentDate}
                </td>
                <td className="px-6 py-4 text-gray-400">
                  {sub.subscriptionNextDueDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
