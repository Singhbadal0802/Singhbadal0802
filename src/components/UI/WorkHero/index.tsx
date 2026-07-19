import React from "react";
import style from "./style"
import SortingGraph from "../SortingGraph";

const WorkHero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 bg-[#ccd5ae] rounded-lg w-full p-8">
      <div className={style.firstname}>
        <span>Believe,
        <span className={style.lastname}> to build perfect with time.</span>
        </span>
      </div>
      <div className="flex w-[40%] h-80 rounded-lg bg-white">
        <SortingGraph/>
      </div>
    </div>
  );
};

export default WorkHero;
