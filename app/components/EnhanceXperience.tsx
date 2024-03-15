import React from "react";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";

const EnhanceXperience = () => {
  return (
    <main className="m-5 lg:m-14 md:py-5 border-b">
      <article className="flex flex-col md:flex-row items-center justify-between gap-10 bg-black w-full p-10 md:px-20">
        <div className="flex flex-col gap-7">
          <p className="text-[#00FF66]">Categories</p>
          <p className="text-white text-5xl leading-tight">
            Enhance Your Music Experience
          </p>
          <button className="w-2/3 md:w-1/4 bg-[#00FF66] text-white px-5 py-3 rounded-md">
            Buy Now
          </button>
        </div>

        <div className="flex items-center relative">
          <div className="hidden md:block blur-bg"></div>
          <Image
            src="/images/speaker.svg"
            alt=""
            width={500}
            height={500}
            className="z-10"
          />
        </div>
      </article>
    </main>
  );
};

export default EnhanceXperience;
