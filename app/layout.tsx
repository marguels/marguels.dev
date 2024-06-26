import "../public/styles/globals.css";
import "highlight.js/styles/github-dark-dimmed.css";
import "katex/dist/katex.min.css";

import Head from "next/head";
import Footer from "@/components/footer/Footer";
import { Providers } from "@/data/Providers";

export const metadata: { title: string; description: string } = {
  title: "Marguino",
  description: "A place for my notes and thoughts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <div className="mainContent">
          <Providers>{children}</Providers>
        </div>
        <Footer />
      </body>
    </html>
  );
}
