import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import ProductComp from "./ProductComp";

const ExploreProducts = () => {
  return (
    <main className="m-5 my-14 lg:m-14 py-5 border-b">
      <p className="border-l-[15px] border-[#DB4444] text-[#DB4444] pl-3 py-1.5 text-xs">
        Out Products
      </p>
      <div className="flex flex-col md:flex-row justify-between mt-3">
        <article className="flex flex-col md:flex-row md:items-center gap-3 md:gap-10">
          <p className="text-2xl md:text-3xl font-semibold">
            Explore Our Products
          </p>
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
      <div className="w-full grid grid-cols-4 place-items-stretch gap-y-10 mt-5">
        <ProductComp />
        <ProductComp />
        <ProductComp />
        <ProductComp />
        <ProductComp />
        <ProductComp />
        <ProductComp />
        <ProductComp />
        <ProductComp />
      </div>
    </main>
  );
};

export default ExploreProducts;
