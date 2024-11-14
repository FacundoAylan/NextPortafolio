import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/01-Navbar";
import { scrollSection } from "./scroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facundo aylan",
  description: "Portafolio personal de facundo aylan",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://next-portafolio-sigma.vercel.app/" />
        <meta property="og:title" content="Portafolio de Facundo Aylan" />
        <meta property="og:description" content="Portafolio personal en el cual demuestro mis habilidades." />
        <meta property="og:image" content="/image/profile.png" />

      </head>
      <body className={`${inter.className} h-full`}>
        <header className="fixed top-0 left-0 w-full h-16 z-50">
          <NavBar scrollSection={scrollSection}/>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
