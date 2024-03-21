import React from "react";
import Image from "next/image";

interface FeaturesProp {
  src: string;
  title: string;
  text: string;
}

const Features: React.FC<FeaturesProp> = ({ src, title, text }) => {
  return (
    <main className="flex flex-col gap-3 text-center">
      <section className="m-auto w-fit bg-[#2F2E30] p-2 rounded-full bg-opacity-30">
        <article className="bg-black p-2 rounded-full">
          <Image src={src} alt="" width={30} height={30} />
        </article>
      </section>
      <p className="text-xl font-semibold uppercase">{title}</p>
      <p className="text-sm">{text}</p>
    </main>
  );
};

export default Features;
