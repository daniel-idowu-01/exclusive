import React from "react";
import { IoMdSend } from "react-icons/io";

const Footer = () => {
  return (
    <main className="grid md:grid-cols-5 gap-10 bg-black text-white p-10">
      {/* first footer row */}
      <section className="flex flex-col gap-4">
        <p className="font-semibold text-lg">Exclusive</p>
        <p>Subscribe</p>
        <article>
          <p className="text-xs">Get 10% off your first order</p>
          <div className="relative w-full flex items-center justify-between bg-transparent border outline-none rounded-md pr-2 mt-2">
            <input
              type="email"
              name="email"
              id="email"
              className="border-none outline-none bg-transparent pl-4 focus:ring-transparent placeholder:text-sm"
              placeholder="Enter your email"
            />
            <IoMdSend className="absolute right-2 text-xl bg-black" />
          </div>
        </article>
      </section>

      {/* second footer row */}
      <section className="flex flex-col gap-4 text-sm">
        <p className="text-lg">Support</p>
        <p>111 Bijay sarani, Dhaka, DH 1515, Bangladesh</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </section>

      {/*  */}
      <section className="flex flex-col gap-4 text-sm">
        <p className="text-lg">Account</p>
        <p>My account</p>
        <p>Login / Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
      </section>

      {/*  */}
      <section className="flex flex-col gap-4 text-sm">
        <p className="text-lg">Quick Link</p>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </section>

      {/*  */}
      <section className="flex flex-col gap-4 text-sm">
        <p className="text-lg">Download App</p>
        <p>Save $3 with App New User Only</p>
      </section>
    </main>
  );
};

export default Footer;
