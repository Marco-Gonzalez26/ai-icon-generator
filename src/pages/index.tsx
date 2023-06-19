import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "~/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Icon Generator</title>
        <meta
          name="description"
          content="Created with ❤ by Sayuri and always.dev"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Navbar
          links={[
            { text: "Home", path: "#home" },
            { text: "Features", path: "#features" },
            { text: "Demo", path: "#demo" },
          ]}
        />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            AI <span className="text-[hsl(280,100%,70%)]">Icon</span> Generator <span className="font-mono">(landing)</span>
          </h1>
        </div>
      </main>
    </>
  );
}
