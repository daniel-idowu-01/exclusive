import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const HeroComp = () => {
  return (
    <main className="flex flex-col md:flex-row justify-between bg-black text-white py-5">
      <article className="flex flex-col gap-5 md:gap-2 px-10 md:px-20 py-10 m-auto">
        <div className="flex items-center gap-5">
          <Image src="/images/apple_logo.svg" alt="" width={30} height={30} />
          <p>iPhone 14 Series</p>
        </div>
        <p className="text-5xl leading-snug">Up to 10% off Voucher</p>
        <div className="flex items-center w-fit gap-2">
          <p className="border-b pb-1">Shop Now</p>
          <FaArrowRight />
        </div>
      </article>

      <article>
        <Image src="/images/hero_img.svg" alt="" width={500} height={500} />
      </article>
    </main>
  );
};

export default HeroComp;
