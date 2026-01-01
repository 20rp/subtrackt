import { prisma } from "../../lib/prisma";
import { Input } from "@/components/ui/Input";

export default async function Page() {
  return (
    <main>
      <div>
        <h1>New Subscription</h1>
        <form>
          <Input
            label="Subscription Name"
            name="name"
            placeholder="e.g. Netflix"
            required
          />
        </form>
      </div>
    </main>
  );
}
