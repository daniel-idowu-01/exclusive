import React from "react";
import Image from "next/image";
import ShopNow from "../ui/ShopNow";

interface NewArrivalCompTemplateProp {
  width: number;
  height: number;
  src: string;
}

const NewArrivalCompTemplate: React.FC<NewArrivalCompTemplateProp> = ({
  width,
  height,
  src,
}) => {
  return (
    <main className="relative bg-black w-fit rounded-md">
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
      />
      <article className="w-1/2 absolute bottom-7 left-7 flex flex-col gap-3 text-white">
        <p className="text-2xl font-semibold">Play Station 5</p>
        <p>Black and White version of the PS5 coming out on sale</p>
        <ShopNow />
      </article>
    </main>
  );
};

export default NewArrivalCompTemplate;
