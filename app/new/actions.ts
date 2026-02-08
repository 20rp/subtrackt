'use server';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';

export async function createSubscription(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error('Not authenticated');

  const name = formData.get('name') as string;
  const provider = formData.get('provider') as string;
  const category = formData.get('category') as string;
  const interval = parseInt(formData.get('interval') as string) || 30;
  const amount = parseFloat(formData.get('amount') as string);
  const nextDue = formData.get('nextDue') as string;

  await prisma.subscriptions.create({
    data: {
      subscriptionName: name,
      subscriptionProvider: provider,
      subscriptionCategory: category,
      subscriptionPaymentInterval: interval,
      subscriptionPaymentAmount: amount,
      subscriptionNextDueDate: nextDue,
      userId: session.user.id,
    },
  });

  redirect('/');
}
