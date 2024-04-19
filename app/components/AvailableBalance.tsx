import React from "react";
import BalanceBg from "../asset/BalanceBg";

export const AvailableBalance = () => {
  return (
    <div className="flex bg-primary w-full justify-between">
      <div className="flex flex-col p-4 justify-between">
        <div className=" text-slate-200 ">Available Balance</div>
        <div className="text-1xl text-white font-bold">$3,500</div>
        <div className="text-sm text-slate-100">See details</div>
      </div>
      <div className="flex bottom-0 ">
        <BalanceBg />
      </div>
    </div>
  );
};
