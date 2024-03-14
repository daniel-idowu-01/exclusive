import React from "react";
import Image from "next/image";

interface CategoryProp {
  src: string;
  category: string;
}

const CategoryComp: React.FC<CategoryProp> = ({ src, category }) => {
  return (
    <main className="flex justify-center items-center w-48 h-32 border-2 p-5 text-center rounded-sm">
      <div className="flex flex-col gap-2">
        <Image src={src} className="mx-auto" alt="" width={50} height={50} />
        <p>{category}</p>
      </div>
    </main>
  );
};

export default CategoryComp;
