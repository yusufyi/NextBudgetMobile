import React from "react";
import { Dashboard } from "../asset/Dashboard";
import SmallSquare from "../layouts/SmallSquare";

export const Header = () => {
  return (
    <div className="flex py-4">
      <Dashboard />

      <div className="flex flex-1  items-center  justify-center font-bold">
        Dashboard
      </div>

      {/* Added closing tag for SmallSquare */}
    </div>
  );
};
