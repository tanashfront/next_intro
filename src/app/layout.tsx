import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Intro App",
  description: "Learning Next",
  openGraph:{
    type:"website",
    title:"Home"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/team/about">Team-About</Link>
            </li>
          </ul>
        </nav>
        --
          <h1>Page Content - {children}</h1>
      </body>
    </html>
  );
}
