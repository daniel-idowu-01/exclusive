import React from "react";
import Image from "next/image";
import ShopNow from "../ui/ShopNow";

interface NewArrivalCompTemplateProp {
  width: number;
  height: number;
  src: string;
  title: string;
  text: string;
}

const NewArrivalCompTemplate: React.FC<NewArrivalCompTemplateProp> = ({
  width,
  height,
  src,
  title,
  text,
}) => {
  return (
    <main className="relative bg-[#0D0D0D] w-full h-full rounded-md">
      <Image src={src} alt="" width={width} height={height} />
      <article className="w-1/2 absolute bottom-7 left-7 flex flex-col gap-3 text-white">
        <p className="text-2xl font-semibold">{title}</p>
        <p>{text}</p>
        <ShopNow />
      </article>
    </main>
  );
};

export default NewArrivalCompTemplate;
