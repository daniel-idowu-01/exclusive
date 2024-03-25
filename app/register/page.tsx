import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const Register = () => {
  return (
    <main className="flex items-center justify-between mt-10 mb-20">
      <section className="hidden md:flex justify-center w-[50%]">
        <Image
          className="w-full"
          src="/images/side_image.svg"
          alt=""
          width={500}
          height={500}
        />
      </section>

      <section className="flex justify-center w-full md:w-[50%]">
        <article>
          <div>
            <p className="text-3xl md:text-4xl">Create an account</p>
            <p className="text-sm mt-2">Enter your details below</p>
          </div>
          <form className="flex max-w-md flex-col gap-4 mt-10">
            <article>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput
                id="name"
                type="text"
                placeholder="John Doe"
                className="focus:ring-transparent w-full"
                required
              />
            </article>
            <article>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="name@flowbite.com"
                className="focus:ring-transparent w-full"
                required
              />
            </article>
            <article>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" className="w-full" required />
            </article>
            <article className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </article>
            <Button type="submit" className="bg-[#DB4444]">
              Create an account
            </Button>
          </form>

          <p className="text-center text-sm my-5">
            Already have an account?{" "}
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          </p>
        </article>
      </section>
    </main>
  );
};

export default Register;
