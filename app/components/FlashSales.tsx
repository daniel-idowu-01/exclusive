import React from "react";
import CountdownTimer from "./CountdownTimer";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const FlashSales = () => {
  return (
    <main className="p-10">
      <p className="border-l-[15px] border-red-600 text-red-600 pl-3 py-1.5 text-xs">
        Today's
      </p>
      <div className="flex justify-between">
        <article className="flex items-center gap-10">
          <p className="text-3xl font-semibold">Flash Sales</p>
          <CountdownTimer />
        </article>

        <article className="flex items-center gap-2">
          <span className="p-3 rounded-full bg-[#F5F5F5]">
            <FaArrowRight />
          </span>
          <span className="p-3 rounded-full bg-[#F5F5F5]">
            <FaArrowLeft />
          </span>
        </article>
      </div>
    </main>
  );
};

export default FlashSales;
