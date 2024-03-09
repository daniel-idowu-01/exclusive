import React from "react";
import Link from "next/link";
import { links, iconStyle } from "../data/NavData";
import { CiSearch, CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";

const NavBar = () => {
  const navLinks = links.map((link) => (
    <div>
      <Link key={link.title} href={link.link}>
        {link.title}
      </Link>
    </div>
  ));

  return (
    <main
      style={{ width: "calc(100% - 2rem)" }}
      className="mx-auto flex items-center justify-between py-5 px-4 border-b"
    >
      <div className="font-semibold text-lg w-full">Exclusive</div>

      <div className="flex justify-evenly w-full">{navLinks}</div>

      <div className="flex items-center justify-around w-full">
        <article className="w-2/3 bg-[#F5F5F5] relative flex items-center justify-between border p-2 px-4 rounded-md">
          <input
            type="numeric"
            name=""
            id=""
            className="bg-transparent border-none outline-none w-[90%]"
            placeholder="What are you looking for?"
          />
          <CiSearch className="absolute right-2 text-xl" />
        </article>
        <div className="flex gap-3">
          <CiHeart className={iconStyle} />
          <CiShoppingCart className={iconStyle} />
          <CiUser className={iconStyle} />
        </div>
      </div>
    </main>
  );
};

export default NavBar;
