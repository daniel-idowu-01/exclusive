"use client";
import React, { useState } from "react";
import Link from "next/link";
import { links } from "../data/infoData";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";

const MobileNav = () => {
  const [sideBar, setSideBar] = useState(false);

  const handleBlur = () => {
    setSideBar(false);
  };
  return (
    <div>
      {sideBar ? (
        <MdOutlineCancel
          onClick={() => setSideBar(!sideBar)}
          className="text-2xl"
        />
      ) : (
        <RxHamburgerMenu
          onClick={() => setSideBar(!sideBar)}
          className="text-2xl"
        />
      )}

      {/* nav bar container */}
      <section
        onBlur={handleBlur}
        className={`${
          sideBar ? "left-0" : "-left-full"
        } w-4/5 h-screen bg-white border-r flex flex-col gap-14 absolute top-0 text-center justify-center transition-all`}
      >
        <div className="font-semibold text-3xl">Exclusive</div>
        {links.map((link) => (
          <Link
            className="hover:underline text-2xl"
            key={link.title}
            href={link.link}
          >
            {link.title}
          </Link>
        ))}
      </section>
    </div>
  );
};

export default MobileNav;
