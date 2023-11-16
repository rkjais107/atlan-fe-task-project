import AtlanLogo from "@/components/ui/atlan-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/components/ui/fonts";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52 row justify-center">
        <AtlanLogo />
      </div>
      <div className="mt-4 flex flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 px-10 py-10">
          <strong
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            Welcome to Atlan&apos;s.
          </strong>
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            A web-based application capable of running SQL queries and
            displaying the results of said query.
          </p>
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            This application can accepts SQL queries in the form of user inputs,
            then runs the given query, and displays the result within the
            application.
          </p>
          <div>
            <Link
              href="/dashboard"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base mt-5"
            >
              <span>Dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
