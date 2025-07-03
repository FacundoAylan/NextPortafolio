import { Inter } from "next/font/google";
import "./globals.css";
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
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet" />

      </head>
      <body className={`${inter.className}`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
