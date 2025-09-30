import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className="min-h-screen flex flex-col"
        style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}
      >
        <nav className="flex items-center justify-center sm:justify-start ">
          <Image
            src="/images/logo_horizontal.svg"
            alt="App Logo"
            height={150}
            width={150}
            className="sm:h-24"
          />
        </nav>
        <main className="flex-1 flex flex-col justify-center align-center">
          <h1 className="text-2xl justify-self-start text-center font-bold mt-10 mb-5 sm:text-5xl">
            &quot;Your Path to Campus Careers, Simplified&quot;
          </h1>
          <p className="opacity-80 text-lg text-center max-w-[600px] mx-auto block sm:text-xl">
            Discover opportunities, apply with ease, and start your professional
            journey.
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
      </div>
    </>
  );
}
