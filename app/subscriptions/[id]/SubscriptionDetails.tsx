"use client";
import { useState } from "react";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { editSubscription } from "./actions";

export function SubscriptionDetails({ sub }: { sub: any }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="relative border border-gray-800 rounded-xl bg-gray-900/50 p-8 cursor-pointer">
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Cancel" : "Edit Subscription"}
      </button>

      {isEditing ? (
        <form
          action={editSubscription}
          className="space-y-6 bg-gray-900/30 p-8 rounded-2xl border border-gray-800"
        >
          {/* Used for editing the current subscription */}
          <input type="hidden" name="id" value={sub.subscriptionID} />
          <Input
            label="Subscription Name"
            name="name"
            defaultValue={sub.subscriptionName}
          />
          <Input
            label="Service Provider"
            name="provider"
            defaultValue={sub.subscriptionProvider}
          />
          <Input
            label="Category"
            name="category"
            defaultValue={sub.subscriptionCategory}
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Payment Interval"
              name="interval"
              defaultValue={sub.subscriptionPaymentInterval}
            />
            <Input
              label="Payment Amount"
              name="amount"
              type="number"
              step="0.01"
              defaultValue={sub.subscriptionPaymentAmount}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Last Payment Made"
              name="lastMade"
              type="date"
              defaultValue={sub.subscriptionLastPaymentDate}
            />
            <Input
              label="Next Payment Due"
              name="nextDue"
              type="date"
              defaultValue={sub.subscriptionNextDueDate}
            />
          </div>
          <Button
            className="w-auto px-4 py-2 text-s flex-none shrink-0 ml-auto"
            type="submit"
          >
            Save
          </Button>
        </form>
      ) : (
        <div className="grid grid-cols-2 gap-8 p-8 border border-gray-800 rounded-xl bg-gray-900/30">
          <h2 className="text-2xl font-bold mb-8 text-white col-span-2">
            {sub.subscriptionName}
          </h2>
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
            {sub.subscriptionLastPaymentDate ? (
              new Date(sub.subscriptionLastPaymentDate).toLocaleDateString()
            ) : (
              <span className="text-gray-600 italic">Empty</span>
            )}
          </Label>
          <Label title="Next Due">
            {sub.subscriptionNextDueDate ? (
              new Date(sub.subscriptionNextDueDate).toLocaleDateString()
            ) : (
              <span className="text-gray-600 italic">Empty</span>
            )}
          </Label>
        </div>
      )}
    </div>
  );
}
