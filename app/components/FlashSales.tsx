import React from "react";
import CountdownTimer from "./CountdownTimer";
import ProductComp from "./ProductComp";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const FlashSales = () => {
  return (
    <main className="m-10 md:py-5 border-b">
      {/* header */}
      <p className="border-l-[15px] border-[#DB4444] text-[#DB4444] pl-3 py-1.5 text-xs">
        Today's
      </p>
      <div className="flex flex-col md:flex-row justify-between mt-3 md:mt-0">
        <article className="flex flex-col md:flex-row md:items-center gap-3 md:gap-10">
          <p className="text-2xl md:text-3xl font-semibold">Flash Sales</p>
          <CountdownTimer />
        </article>

        <article className="hidden md:flex items-center gap-2">
          <span className="p-3 rounded-full bg-[#F5F5F5]">
            <FaArrowLeft />
          </span>
          <span className="p-3 rounded-full bg-[#F5F5F5]">
            <FaArrowRight />
          </span>
        </article>
      </div>

      {/*  */}
      <div className="scroll grid grid-cols-6 gap-[22rem] mt-5 overflow-x-scroll">
        <ProductComp />
        <ProductComp />
        <ProductComp />
        <ProductComp />
        <ProductComp />
        <ProductComp />
      </div>

      <div className="flex justify-center items-center my-10">
        <button className="bg-[#DB4444] text-white px-6 py-3 rounded-md">
          View All Products
        </button>
      </div>
    </main>
  );
};

export default FlashSales;
