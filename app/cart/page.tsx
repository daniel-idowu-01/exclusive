import React from "react";
import TableComp from "../ui/Table";

const Cart = () => {
  return (
    <main className="min-h-screen p-10">
      <section>
        <p className="text-sm mb-10">
          <span className="opacity-50">Home</span> / Cart
        </p>

        {/*  */}
        <article>
          <TableComp />
          <div className="flex justify-between mt-5">
            <button className="border border-black px-4 py-3 rounded-md text-sm">
              Return To Shop
            </button>
            <button className="border border-black px-4 py-3 rounded-md text-sm">
              Update Cart
            </button>
          </div>
        </article>

        {/*  */}
        <article className="flex flex-col md:flex-row justify-between gap-5 mt-10">
          <div>
            <input
              type="text"
              name="coupon"
              id="coupon"
              placeholder="Coupon code"
              className="ring-transparent focus:ring-transparent outline-none rounded-md mr-3"
            />
            <button className="bg-[#DB4444] px-4 py-3 rounded-md text-sm text-white">
              Apply Coupon
            </button>
          </div>
          <div className="flex flex-col gap-3 border p-7">
            <p>Cart Total</p>
            <aside className="flex justify-between">
              <p>Subtotal:</p>
              <p>$1750</p>
            </aside>
            <hr />
            <aside className="flex justify-between">
              <p>Shipping:</p>
              <p>Free</p>
            </aside>
            <hr />
            <aside className="flex justify-between">
              <p>Total:</p>
              <p>$1750</p>
            </aside>
            <button className="bg-[#DB4444] px-4 py-3 rounded-md text-sm text-white">
              Proceed To Checkout
            </button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Cart;
