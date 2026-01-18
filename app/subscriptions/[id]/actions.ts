"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editSubscription(formData: FormData) {
  const id = parseInt(formData.get("id") as string);

  const name = formData.get("name") as string;
  const provider = formData.get("provider") as string;
  const category = formData.get("category") as string;
  const interval = parseInt(formData.get("interval") as string) || 30;
  const amount = parseFloat(formData.get("amount") as string);
  const lastMade = formData.get("lastMade") as string;
  const nextDue = formData.get("nextDue") as string;

  await prisma.subscriptions.update({
    where: { subscriptionID: id },
    data: {
      subscriptionName: name,
      subscriptionProvider: provider,
      subscriptionCategory: category,
      subscriptionPaymentInterval: interval,
      subscriptionPaymentAmount: amount,
      subscriptionLastPaymentDate: lastMade,
      subscriptionNextDueDate: nextDue,
    },
  });
  revalidatePath(`/subscriptions/${id}`);
  redirect(`/subscriptions/${id}`);
}
