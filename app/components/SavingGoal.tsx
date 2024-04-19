import React from "react";
import Bag from "../asset/Bag";

const SavingGoal = () => {
  return (
    <div className="p-6 flex justify-between items-center">
      <div className="w-3/4 space-y-3 ">
        <div className="text-black text-sm ">Saving Goal</div>
        <div className="text-slate-500 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
      <div className="w-1/4  flex  justify-center items-center">
        <Bag />
      </div>
    </div>
  );
};

export default SavingGoal;
