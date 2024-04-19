import React from "react";

// layout components
interface SmallSquareProps {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  shadow?: boolean;
}

export default function SmallSquare({
  children,
  bgColor,
  textColor,
  shadow,
}: SmallSquareProps) {
  return (
    <div
      className={`mx-6 my-2 w-svh  overflow-hidden rounded-2xl ${
        shadow ? "shadow-sm  " : ""
      } ${bgColor} ${textColor}`}
    >
      {children}
    </div>
  );
}
