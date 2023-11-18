import Hero from "@/components/hero/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero/>
      <p>Visit my blog <Link href='/blog'>here</Link>!</p>
    </main>
  )
}
