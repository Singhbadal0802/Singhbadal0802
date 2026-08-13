import React from "react";
import style from "@/components/UI/WorkHero/style";
import GenericCard from "@/components/UI/GenericCard";
import PrimeButton from "../about/components/PrimeButton";
import { ABOUT_ME, WHY_DRIVES_ME, SOCIAL_BUTTONS } from "../about/utils/utils";

const About = () => {
  return (
    <div>
      <div className="flex flex-col py-4 md:py-8 lg:px-24 lg:py-16 gap-2 lg:gap-4 mx-auto w-full bg-linear-to-r from-[#ccd5ae] to-white !pt-40">
        <div className="flex flex-row">
          <div className="text-2xl md:text-4xl lg:text-6xl font-black text-black tracking-tighter leading-[1.2]">
            👋{" "}
          </div>
          <div className="flex flex-col items-start mx-4 lg:mx-0 gap-4 text-md md:text-lg font-bold uppercase tracking-[0.3em] text-black">
            <div className={style.firstname}>
              <span>{ABOUT_ME.header}</span>
            </div>
            <div className="w-full text-black">{ABOUT_ME.title}</div>
          </div>
        </div>
        <div className="px-8 md:px-20">{ABOUT_ME.description}</div>
        <div className="flex flex-col md:flex-row gap-4 my-2 hover:my-0 transiton-all duration-400 ease-in-out items-center pt-8 px-4 md:px-20 w-max py">
          {SOCIAL_BUTTONS.map((button) => (
            <div key={button}>
              <PrimeButton title={button} />
            </div>
          ))}
        </div>
      </div>

      <GenericCard />

      <div className="flex flex-col px-8 py-16 gap-8 bg-linear-to-t from-stone-100 to-white">
        <h1 className="text-3xl font-bold">What drives me</h1>
        {WHY_DRIVES_ME.map((element) => (
          <div
            key={element.id}
            className="p-4 border border-t-4 border-stone-100 min-w-32 bg-white rounded-2xl shadow-md shadow-stone-900/10 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-900/15 transition-all duration-300"
          >
            <h1 className="font-bold text-xl">{element.title}</h1>
            <p className="px-8">{element.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;