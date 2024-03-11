import React from "react";
import HeroComp from "./HeroComp";
import { sidebarCategories } from "../data/infoData";

const Hero = () => {
  return (
    <main className="flex">
      <article className="flex flex-col gap-4 border-r w-[20%] md:px-10 md:pt-10 h-fit">
        {sidebarCategories.map((category, index) => (
          <p key={index}>{category.name}</p>
        ))}
      </article>

      <article className="p-10 pb-0 w-[80%] h-full">
        <HeroComp />
      </article>
    </main>
  );
};

export default Hero;
