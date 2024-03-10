"use client";
import React from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { links } from "../data/NavData";

const NavBar = () => {
  const navLinks = links.map((link) => (
    <Link className="hover:underline" key={link.title} href={link.link}>
      {link.title}
    </Link>
  ));

  return (
    <main
      style={{ width: "calc(100% - 2rem)" }}
      className="mx-auto flex items-center justify-between py-5 px-4 border-b"
    >
      <div className="font-semibold text-lg w-full">Exclusive</div>

      <div className="hidden md:flex justify-evenly w-full">{navLinks}</div>

      <div className="hidden md:flex items-center justify-around w-full">
        <DesktopNav />
      </div>

      <div className="md:hidden">
        <MobileNav />
      </div>
    </main>
  );
};

export default NavBar;
