import React from "react";
import Wallet from "../asset/Wallet";

const Expense = () => {
  return (
    <div className=" p-4 h-36 flex flex-col justify-between">
      <div>
        <Wallet />
      </div>
      <div>
        <div className=" text-slate-900 font-bold ">$2000</div>
        <div className="text-sm  text-slate-500">Expense</div>
      </div>
    </div>
  );
};

export default Expense;
