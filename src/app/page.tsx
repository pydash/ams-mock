import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col gap-y-3 justify-center align-center"
      style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}
    >
      <h1 className="text-3xl text-center font-bold">AMS Mock</h1>
      <p className="text-lg text-center max-w-[600px] mx-auto block sm:text-xl">
        This is a mock application to demonstrate the use of Next.js with
        TypeScript and Tailwind CSS.
      </p>
      <div className="flex gap-x-3 mt-3 justify-center">
        <Button variant="outline" asChild>
          <Link href="/signup">Signup</Link>
        </Button>
        <Button variant="default" asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </main>
  );
}
