import React from "react";
import NewArrivalComp from "./NewArrivalComp";

const NewArrival = () => {
  return (
    <main className="m-5 my-14 lg:m-14 py-5 border-b">
      <p className="border-l-[15px] border-[#DB4444] text-[#DB4444] pl-3 py-1.5 text-xs">
        Featured
      </p>
      <div className="flex flex-col md:flex-row justify-between mt-3">
        <article className="flex flex-col md:flex-row md:items-center gap-3 md:gap-10">
          <p className="text-2xl md:text-3xl font-semibold">
            New Arrival
          </p>
        </article>
      </div>

      {/*  */}
      <div>
        <NewArrivalComp />
      </div>
    </main>
  );
};

export default NewArrival;
