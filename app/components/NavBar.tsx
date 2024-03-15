"use client";
import React from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { links } from "../data/infoData";

const NavBar = () => {
  const navLinks = links.map((link) => (
    <Link className="hover:underline" key={link.title} href={link.link}>
      {link.title}
    </Link>
  ));

  return (
    <main
      style={{ width: "calc(100% - 2rem)" }}
      className="mx-auto flex items-center justify-between py-5 px-6 lg:px-10 border-b"
    >
      <div className="font-semibold text-lg lg:w-full">Exclusive</div>

      <div className="hidden md:flex justify-evenly lg:w-full md:gap-5">
        {navLinks}
      </div>

      <div className="hidden md:flex items-center justify-around w-[40%] lg:w-full">
        <DesktopNav />
      </div>

      <div className="md:hidden">
        <MobileNav />
      </div>
    </main>
  );
};

export default NavBar;
