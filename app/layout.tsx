import "../public/styles/globals.css";
// import 'highlight.js/styles/an-old-hope.css';
import 'highlight.js/styles/github-dark-dimmed.css';

import ScrollProgress from "@/components/ScrollProgress";

export const metadata: { title: string; description: string } = {
  title: "Marguino",
  description: "A place for my notes and thoughts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const header = (
    <header>
      <div className="navbar">
        <h1>Marguino</h1>
        <nav>
          <ul>
            <li>
              <a href="#link1">Link 1</a>
            </li>
            <li>
              <a href="#link2">Link 2</a>
            </li>
            <li>
              <a href="#link3">Link 3</a>
            </li>
          </ul>
        </nav>
      </div>
      <ScrollProgress/>
    </header>
  );

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
      <body>
        {header}
        <div className="main-content">
        {children}
        </div>
        {footer}
      </body>
    </html>
  );
}
