import React from "react";
import { Dropdown } from "flowbite-react";
import { iconStyle } from "../data/NavData";
import { CiSearch, CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";

const DesktopNav = () => {
  return (
    <>
      <article className="w-2/3 bg-[#F5F5F5] relative flex items-center justify-between border p-2 px-4 rounded-md">
        <input
          type="numeric"
          name=""
          id=""
          className="bg-transparent border-none outline-none w-[90%]"
          placeholder="What are you looking for?"
        />
        <CiSearch className="absolute right-2 text-xl" />
      </article>
      <div className="flex gap-2">
        <CiHeart className={iconStyle} />
        <div className="relative group">
          <CiShoppingCart className={iconStyle} />
          <span className="transition-all group-hover:hidden absolute text-[10px] -top-1 -right-1 bg-red-500 p-0.5 px-1.5 rounded-full  text-white">
            2
          </span>
        </div>
        <Dropdown label={<CiUser className={iconStyle} />} inline>
          <Dropdown.Item>Manage My Account</Dropdown.Item>
          <Dropdown.Item>My Order</Dropdown.Item>
          <Dropdown.Item>My Cancellation</Dropdown.Item>
          <Dropdown.Item>My Reviews</Dropdown.Item>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown>
      </div>
    </>
  );
};

export default DesktopNav;
