import React from "react";
import { BiDockTop, BiHomeAlt, BiWallet } from "react-icons/bi";
import { BsCalendar4 } from "react-icons/bs";
import { GoPerson } from "react-icons/go";

const Footer = () => {
  return (
    <div className="bottom-0  fixed  w-full flex  flex-col  shadow-md  items-center justify-center ">
      <div className="bg-blue-400 w-20 h-20 rounded-full   border-8   -bottom-10 relative border-slate-100  flex items-center justify-center  text-slate-100 text-2xl  font-bold">
        +
      </div>
      <div className="flex justify-around border w-full text-xl font-bold text-slate-400 items-center h-20  bg-white">
        <BiHomeAlt />
        <BiDockTop />

        <BiWallet />
        <GoPerson />
      </div>
    </div>
  );
};

export default Footer;
