import React from "react";
import { Bank } from "../asset/Bank";

const Income = () => {
  return (
    <div className=" p-4  h-36  flex flex-col justify-between ">
      <div>
        <Bank />
      </div>
      <div>
        {" "}
        <div>
          <div className=" text-slate-900 font-bold ">$2000</div>
          <div className="text-sm  text-slate-500">Income</div>
        </div>
      </div>
    </div>
  );
};

export default Income;
