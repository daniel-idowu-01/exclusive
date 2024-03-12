import React from "react";
import Image from "next/image";
import Stars from "./Stars";
import { CiHeart } from "react-icons/ci";
import { PiEyeLight } from "react-icons/pi";

const ProductComp = () => {
  const iconStyle: string = "text-2xl bg-white rounded-full p-2";

  return (
    <main className="flex-1 w-80">
      <section className="group relative bg-[#F5F5F5] p-14 rounded-md hover:cursor-pointer">
        <Image src="/images/psp.svg" alt="" width={200} height={200} />
        <p className="bg-red-500 text-white px-2 py-1 rounded-md absolute top-3 left-3">
          -40%
        </p>
        <div className="flex flex-col gap-2 absolute top-3 right-3">
          <span className={iconStyle}>
            <CiHeart />
          </span>
          <span className={iconStyle}>
            <PiEyeLight />
          </span>
        </div>

        <button className="bg-black bg-opacity-80 hover:bg-opacity-100 text-white w-full py-2 absolute left-0 -bottom-1/4 group-hover:bottom-0 group-hover:z-10 transition-all -z-50">
          Add To Cart
        </button>
      </section>

      <section className="bg-white flex flex-col gap-2 py-4 z-10">
        <p className="font-semibold">HAVIT HV-G92 Gamepad</p>
        <div>
          <span className="text-red-500">$120</span>
          <span className=" line-through opacity-50 ml-4">$160</span>
        </div>
        <div className="flex items-center gap-2">
          <Stars numberOfStars={5} />
          <p className="opacity-50 text-sm">(88)</p>
        </div>
      </section>
    </main>
  );
};

export default ProductComp;
