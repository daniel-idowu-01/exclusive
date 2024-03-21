import React from "react";
import NewArrivalCompTemplate from "./NewArrivalCompTemplate";

const NewArrivalComp = () => {
  return (
    <main className="mt-5 md:flex gap-5">
      <section className="w-full md:w-[40%]">
        <NewArrivalCompTemplate
          src="/images/playstation.svg"
          width={500}
          height={500}
          title="Play Station 5"
          text="Black and White version of the PS5 coming out on sale"
        />
      </section>

      <section className="md:w-[60%] grid md:grid-cols-3 gap-5 mt-5 md:mt-0">
        <article className="md:col-span-3 w-full">
          <NewArrivalCompTemplate
            src="/images/women_hat.svg"
            width={500}
            height={500}
            title="Women's Collections"
            text="Featured woman collections that give you another vibe"
          />
        </article>

        <article className="md:col-span-1 w-full">
          <NewArrivalCompTemplate
            src="/images/speakers_2.svg"
            width={300}
            height={500}
            title="Speakers"
            text="Amazon wireless speakers"
          />
        </article>

        <article className="md:col-span-2 w-full">
          <NewArrivalCompTemplate
            src="/images/perfume.svg"
            width={300}
            height={500}
            title="Perfume"
            text="GUCCI INTENSE OUD EDP"
          />
        </article>
      </section>
    </main>
  );
};

export default NewArrivalComp;
