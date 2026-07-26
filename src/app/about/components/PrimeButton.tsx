import React from "react";
import { IconMap } from "./icons";

type PrimeButtonProps = { title: string };

const PrimeButton = ({ title }: PrimeButtonProps) => (
  <button className="flex flex-row rounded-full bg-white w-36 md:w-10 md:hover:w-36 overflow-hidden transition-all duration-400 ease-in-out p-1 md:p-0 md:hover:p-1">
    <div className="rounded-full min-w-10 min-h-10 flex justify-center items-center bg-black">
      {IconMap[title]}
    </div>
    <div className="text-md my-auto mx-2">{title}</div>
  </button>
);

export default PrimeButton;