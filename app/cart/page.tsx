import React from "react";
import TableComp from "../ui/Table";

const Cart = () => {
  return (
    <main className="min-h-screen p-10">
      <section>
        <p className="text-sm mb-10">
          <span className="opacity-50">Home</span> / Cart
        </p>

        <article>
          <TableComp />
        </article>
      </section>
    </main>
  );
};

export default Cart;
