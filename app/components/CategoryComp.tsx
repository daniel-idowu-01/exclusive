import React from "react";

const CategoryComp = () => {
  return (
    <main className="flex justify-center items-center w-48 h-32 border-2 p-5 text-center rounded-sm">
      <div className="flex flex-col gap-2">
        <img src="/images/categories/phone.svg" alt="" />
        <p>Phones</p>
      </div>
    </main>
  );
};

export default CategoryComp;
