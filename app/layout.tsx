import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderInfo from "./components/HeaderInfo";
import NavBar from "./components/NavBar";

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
      <body className="poppins-regular">
        <HeaderInfo />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
