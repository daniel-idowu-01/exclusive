"use client";
import React from "react";
import { Dropdown } from "flowbite-react";

const HeaderInfo = () => {
  return (
    <main className="poppins-regular flex justify-between bg-black w-full py-4 px-10 text-[#FAFAFA]">
      <div></div>

      <div className="hidden md:block">
        Summer sale for all swim suits and free express delivery - OFF 50%!
        <span className="underline ml-2 font-semibold">ShopNow</span>
      </div>

      <div>
        <Dropdown label="English" inline>
          <Dropdown.Item>English</Dropdown.Item>
          <Dropdown.Item>Spanish</Dropdown.Item>
          <Dropdown.Item>Italian</Dropdown.Item>
          <Dropdown.Item>French</Dropdown.Item>
        </Dropdown>
      </div>
    </main>
  );
};

export default HeaderInfo;
