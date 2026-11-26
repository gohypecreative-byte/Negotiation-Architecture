import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export default function NotFound() {
  return <SiteShell>
    <section className="bg-[#f6f2ea] px-6 pb-24 pt-40 text-center">
      <h1 className="text-4xl">Page not found</h1>
      <p className="mt-5 text-base">The page you are looking for is unavailable.</p>
      <Link href="/" className="mt-6 inline-flex min-h-11 items-center underline underline-offset-4">Return home</Link>
    </section>
  </SiteShell>;
}
