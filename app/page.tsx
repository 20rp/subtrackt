import Link from 'next/link';
import { prisma } from '../lib/prisma';
import { Button } from '@/components/ui/Button';
import { auth } from '@/auth';
import { SignIn, SignOut } from '@/components/ui/auth-components';

export default async function Page() {
  const session = await auth();

  if (!session || !session.user?.id) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1>Welcome to SubtrackT</h1>
        <SignIn />
      </main>
    );
  }
  // Legacy, Single user mode
  // const allSubs = await prisma.subscriptions.findMany();

  const allSubs = await prisma.subscriptions.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <nav className="flex justify-between border-b p-4">
        <span>Logged in as {session.user?.email}</span>
        <SignOut />
      </nav>
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="mb-8 text-2xl font-bold text-white">SubtrackT</h1>
          <h2 className="text-md text-gray-300">Lightweight Personal Subscription Manager</h2>
          <p className="text-sm text-gray-500">You have {allSubs.length} active subscriptions</p>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-800 text-[10px] tracking-widest text-gray-400 uppercase">
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
              <tr key={sub.subscriptionID} className="transition-colors hover:bg-gray-800/30">
                <td className="px-6 py-4 font-medium text-white">
                  <Link
                    href={`/subscriptions/${sub.subscriptionID}`}
                    className="cursor-pointer font-medium transition-colors hover:text-rose-500"
                  >
                    {sub.subscriptionName}
                  </Link>
                </td>
                <td className="px-6 py-4 text-gray-400">{sub.subscriptionProvider}</td>
                <td className="px-6 py-4 text-right font-mono text-rose-400">
                  ${sub.subscriptionPaymentAmount?.toFixed(2) ?? '0.00'}
                </td>
                <td className="px-6 py-4 text-gray-400">
                  {sub.subscriptionCategory ?? 'Uncategorised'}
                </td>
                <td className="px-6 py-4 text-gray-400">{sub.subscriptionPaymentInterval}</td>
                <td className="px-6 py-4 text-gray-400">{sub.subscriptionLastPaymentDate}</td>
                <td className="px-6 py-4 text-gray-400">{sub.subscriptionNextDueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
