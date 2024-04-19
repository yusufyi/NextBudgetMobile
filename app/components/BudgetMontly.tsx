import React from "react";

export const BudgetMontly = () => {
  const mounth = new Date().toLocaleString("default", { month: "long" });

  return (
    <div className="p-6 flex justify-between">
      <div className=" space-y-2">
        <div className="text-white text-sm">Budget for {mounth}</div>
        <div className="text-slate-200 text-sm">Cash Available</div>
      </div>
      <div className="flex items-center">
        <div className="font-bold text-xl text-white">$2,150</div>
      </div>
    </div>
  );
};
