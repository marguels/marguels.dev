import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello, World!</h1>
      <p>Visit my blog <Link href='/blog'>here</Link>!</p>
    </main>
  )
}
