import React, { useState } from "react";

const ProficiencyBar = (props: any) => {
  const EficencyArr = props?.proficiencyLevel
    ?.split("(")?.[1]
    ?.replace("%)", "")
    ?.split("-");
  const lower = EficencyArr ? Number(EficencyArr[0]) : 0;
  const higher = EficencyArr ? Number(EficencyArr[1]) : 100;

  return (
    <div className="relative">
      <div className="bg-text-secondary w-32 h-5 mx-2 rounded-md overflow-hidden">
        <div className={`h-5 bg-green-600 z-1 w-0 transition-all duration-600 ease-in-out`} style={{width : `${(lower+higher)/2}%`}}></div>
      </div>
      <div className="flex absolute right-0 top-0 left-7 justify-between z-3">
        <div className="!w-2 bg-white h-5"></div>
        <div className="!w-2 bg-white"></div>
        <div className="!w-2 bg-white h-5"></div>
        <div className="!w-2 bg-white h-5"></div>
        <div className="!w-2 bg-white h-5"></div>
      </div>
    </div>
  );
};

export default ProficiencyBar;
