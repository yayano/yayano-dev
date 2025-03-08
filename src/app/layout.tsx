import type { Metadata } from "next";
import "./globals.css"; // Make sure you have Tailwind or a global CSS file

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "My Blog - A Developer's Journey",
  description:
    "Sharing knowledge about web development, React, Next.js, and more!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
