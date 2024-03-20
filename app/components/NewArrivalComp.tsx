import React from "react";
import NewArrivalCompTemplate from "./NewArrivalCompTemplate";

const NewArrivalComp = () => {
  return (
    <main className="flex gap-5">
      <section className="w-[40%]">
        <NewArrivalCompTemplate
          src="/images/playstation.svg"
          width={500}
          height={500}
        />
      </section>

      <section className="w-[60%] grid grid-cols-3 gap-5">
        <article className="col-span-3 w-full">
          <NewArrivalCompTemplate
            src="/images/women_hat.svg"
            width={500}
            height={500}
          />
        </article>

        <article className="">
          <NewArrivalCompTemplate
            src="/images/speakers_2.svg"
            width={250}
            height={500}
          />
        </article>

        <article>
          <NewArrivalCompTemplate
            src="/images/perfume.svg"
            width={250}
            height={500}
          />
        </article>
      </section>
    </main>
  );
};

export default NewArrivalComp;
