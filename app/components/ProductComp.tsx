import React from "react";
import Image from "next/image";
import Stars from "./Stars";

const ProductComp = () => {
  return (
    <article className="w-fit">
      <section className="bg-[#F5F5F5] p-14 rounded-md">
        <Image src="/images/psp.svg" alt="" width={200} height={200} />
      </section>
      <section className="flex flex-col gap-2 py-4">
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
    </article>
  );
};

export default ProductComp;
