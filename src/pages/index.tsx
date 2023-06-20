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
      <main className="">
        <Navbar
          links={[
            { text: "Home", path: "#home" },
            { text: "Features", path: "#features" },
            { text: "Demo", path: "#demo" },
          ]}
        />
        <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
          <div className="container relative  flex items-center justify-between gap-16 px-16 py-16">
            <h1 className="w-28 text-left text-5xl font-extrabold tracking-tight text-white sm:text-[5.5rem]">
              Create
              <span className="text-[hsl(280,100%,70%)]"> beautiful</span> icons
              with ai
            </h1>
            <div className="p-8 w-3/5 rounded backdrop-blur-md bg-white/5">
              <img src="/landing-bg.jpeg" className="rounded" />
            </div>
          </div>
        </section>
        <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#15162c] to-[#2e026d] p-8">
          <div className="h-full w-full bg-slate-50/50 px-24"></div>
        </section>
      </main>
    </>
  );
}
