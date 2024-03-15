import React from "react";
import CategoryComp from "./CategoryComp";
import { categories } from "../data/infoData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const BrowseByCategory = () => {
  return (
    <main className="m-10 md:py-10 border-b">
      <p className="border-l-[15px] border-[#DB4444] text-[#DB4444] pl-3 py-1.5 text-xs">
        Categories
      </p>
      <div className="flex flex-col md:flex-row justify-between mt-3">
        <article className="flex flex-col md:flex-row md:items-center gap-3 md:gap-10">
          <p className="text-2xl md:text-3xl font-semibold">
            Browse By Category
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
      <div className="scroll mt-10 flex justify-between gap-10 overflow-x-scroll">
        {categories.map((category) => (
          <CategoryComp {...category} />
        ))}
      </div>
    </main>
  );
};

export default BrowseByCategory;
