import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderInfo from "./components/HeaderInfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exclusive",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderInfo />
        {children}
      </body>
    </html>
  );
}
