"use server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createSubscription(formData: FormData) {
  const name = formData.get("name") as string;
  const provider = formData.get("provider") as string;
  const category = formData.get("category") as string;
  const interval = parseInt(formData.get("interval") as string) || 30;
  const amount = parseFloat(formData.get("amount") as string);
  const nextDue = formData.get("nextDue") as string;

  await prisma.subscriptions.create({
    data: {
      subscriptionName: name,
      subscriptionProvider: provider,
      subscriptionPaymentAmount: amount,
      subscriptionNextDueDate: nextDue,
      subscriptionCategory: category,
    },
  });

  redirect("/");
}
