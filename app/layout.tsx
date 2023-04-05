import { Metadata } from "next";
import NavBar from "./components/NavBar";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "OpenTable",
  description: "Restaurant scheduling app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <body>
        <main className="bg-gray-100 min-h-screen w-screen">
          <main className="max-w-screen-2xl m-auto bg-white">
            <NavBar />
            {children}
          </main>
        </main>
      </body>
    </html>
  );
}
