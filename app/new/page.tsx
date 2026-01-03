import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { prisma } from "../../lib/prisma";
import { createSubscription } from "./actions";

export default async function Page() {
  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8 text-white">New Subscription</h1>
      <form
        action={createSubscription}
        className="space-y-6 bg-gray-900/30 p-8 rounded-2xl border border-gray-800"
      >
        <Input
          label="Subscription Name"
          name="name"
          placeholder="e.g. Phone bill"
          required
        />
        <Input
          label="Service Provider"
          name="provider"
          placeholder="e.g 2 degrees Ltd"
        />
        <Input label="Category" name="category" placeholder="e.g. Utilities" />
        <div className="grid grid-cols-3 gap-4">
          <Input
            label="Payment Interval"
            name="interval"
            placeholder="e.g. 7, 14, 30"
            defaultValue="30"
          />
          <Input
            label="Payment Amount"
            name="amount"
            type="number"
            step="0.01"
            placeholder="$0.00"
            min="0"
          />
          <Input label="Next Payment Due" name="nextDue" type="date" />
        </div>
        <Button
          className="w-auto px-4 py-2 text-s flex-none shrink-0 ml-auto"
          type="submit"
        >
          Add Subscription
        </Button>
      </form>
    </main>
  );
}
