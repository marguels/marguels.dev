import "../public/styles/globals.css";
import 'highlight.js/styles/github-dark-dimmed.css';
import "katex/dist/katex.min.css";

import Header from '@/components/header/Header';
import Head from "next/head";
import Footer from "@/components/footer/Footer";

export const metadata: { title: string; description: string } = {
  title: "Marguino",
  description: "A place for my notes and thoughts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const footer = (
    <footer>
      <div>
        <br />
        <h3>Developed by Margherita</h3>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Header/>
        <div className="main-content">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
