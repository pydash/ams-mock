import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col justify-center"
      style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}
    >
      <h1 className="text-5xl text-center font-bold sm:text-2xl">AMS Mock</h1>
      <p className="mt-4 text-lg text-center">
        This is a mock application to demonstrate the use of Next.js with
        TypeScript and Tailwind CSS.
      </p>
      <p className="mt-2 text-center">
        It includes a simple layout and some example components.
      </p>
      <div className="flex gap-x-3 justify-center">
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
