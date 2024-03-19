import React from "react";
import Image from "next/image";
import ShopNow from "../ui/ShopNow";

const HeroComp = () => {
  return (
    <main className="flex flex-col md:flex-row justify-between bg-black text-white py-5">
      <article className="flex flex-col gap-5 px-10 lg:px-20 py-10 m-auto">
        <div className="flex items-center gap-5">
          <Image src="/images/apple_logo.svg" alt="" width={30} height={30} />
          <p>iPhone 14 Series</p>
        </div>
        <p className="text-4xl lg:text-5xl leading-snug">
          Up to 10% off Voucher
        </p>
        <ShopNow />
      </article>

      <article>
        <Image src="/images/hero_img.svg" alt="" width={500} height={500} />
      </article>
    </main>
  );
};

export default HeroComp;
