import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import ProductComp from "./ProductComp";

const ExploreProducts = () => {
  return (
    <main className="m-5 my-14 lg:m-14 py-5 border-b">
      <p className="border-l-[15px] border-[#DB4444] text-[#DB4444] pl-3 py-1.5 text-xs">
        Our Products
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

      {/* products */}
      <section>
        <div className="flex justify-between gap-10 mt-5 overflow-x-hidden">
          <ProductComp />
          <ProductComp />
          <ProductComp />
          <ProductComp />
        </div>
        <div className="flex justify-between gap-10 mt-5 overflow-x-hidden">
          <ProductComp />
          <ProductComp />
          <ProductComp />
          <ProductComp />
        </div>
      </section>

      <div className="flex justify-center items-center my-10">
        <button className="bg-[#DB4444] text-white px-6 py-3 rounded-md">
          View All Products
        </button>
      </div>
    </main>
  );
};

export default ExploreProducts;
