import About from "@/components/about/About";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      <About />
    </main>
  )
}
