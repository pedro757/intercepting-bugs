import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/retencion/1">
        <Button>Show modal (intercepted route)</Button>
      </Link>
    </main>
  );
}
