import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import lightModeIcon from "../public/lightMode.svg"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sumit Kumar Soni</title>
        <meta name="description" content="Portfolio of Sumit Kumar Soni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-bg-dark flex flex-col h-screen">
        <nav className="container mx-auto flex justify-between py-4">
          <Link href={'/'} className="font-logo text-3xl font-bold text-fg-dark text-center">Sumit</Link>
          <div className="flex gap-8">
            <div className="flex justify-between gap-8 mt-[6px]">
              <Link href={'/'} className="font-main text-primary-dark text-xl">about.</Link>
              <Link href={'/'} className="font-main text-fg-dark text-xl">skills.</Link>
              <Link href={'/'} className="font-main text-fg-dark text-xl">projects.</Link>
              <Link href={'/'} className="font-main text-fg-dark text-xl">contact.</Link>
            </div>
            <Image src={lightModeIcon} alt="light mode icon" />
          </div>
        </nav>

        <section className="m-auto font-main text-center">
          <h1 className="text-5xl font-bold text-fg-dark">
            Portfolio
          </h1>
          <p className="text-2xl font-bold text-fg-dark">
            In Progress...
          </p>
        </section>
      </main>
    </div>
  );
}
