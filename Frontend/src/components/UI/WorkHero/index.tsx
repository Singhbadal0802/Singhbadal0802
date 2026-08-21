import React from "react";
import style from "./style"
import SortingGraph from "../SortingGraph";

const WorkHero = () => {

  const videoFileArray = ["laptop", "web-developer", "work-hero"];
  const randomInt = Math.random();
  const videoSourceFile = Math.floor(randomInt * 3);

  return (
    <div className="flex flex-col md:flex-row gap-4 lg:gap-16 bg-[#ccd5ae] rounded-2xl w-full p-8">
      <div className="flex flex-col gap-4 lg:gap-8 text-sm">
      <div className='text-2xl md:text-3xl font-bold uppercase tracking-[0.3em] text-black'>
        <span>Believe, to build perfect
        <span className={style.lastname}> with time.</span>
        </span>
      </div>
      <span>If I take longer, expect something better than imagined.</span>
      </div>
      <div className="flex min-w-[230px] h-80 overflow-hidden rounded-[30%_70%_60%_40%/30%_30%_70%_70%] bg-white shadow-xl/30 bg-linear-to-r from-blud-600 to-white">
        {/* <SortingGraph/> */}
        <video muted autoPlay loop playsInline src={`/${videoFileArray[videoSourceFile]}.mp4`}/>
      </div>
    </div>
  );
};

export default WorkHero;
