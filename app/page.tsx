"use client"
import BackgroundAnimation from "@/components/BackgroundAnimation";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main>
      <Header/>
      <div className="backgroundAnimation">
        <BackgroundAnimation />
      </div>
        <Hero />
    </main>
  )
}
