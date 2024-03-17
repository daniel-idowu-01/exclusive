import React from "react";
import ProductComp from "./ProductComp";

const BestSelling = () => {
  return (
    <main className="m-5 my-14 lg:m-14 md:py-5 border-b">
      <p className="border-l-[15px] border-[#DB4444] text-[#DB4444] pl-3 py-1.5 text-xs">
        This Month
      </p>
      <div className="flex flex-col md:flex-row justify-between mt-3">
        <article className="flex flex-col md:flex-row md:items-center gap-3 md:gap-10">
          <p className="text-2xl md:text-3xl font-semibold">
            Best Selling Products
          </p>
        </article>

        <article className="hidden md:flex items-center gap-2">
          <button className="bg-[#DB4444] text-white px-6 py-3 rounded-md">
            View All
          </button>
        </article>
      </div>

      <div className="flex justify-between gap-10 mt-5 overflow-x-hidden">
        <ProductComp />
        <ProductComp />
        <ProductComp />
        <ProductComp />
      </div>
    </main>
  );
};

export default BestSelling;
