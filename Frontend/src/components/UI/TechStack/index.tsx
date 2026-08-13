"use client";
import React, { useState } from "react";
import style from "./style";
import { techItems, Tech } from "./utility";
import { cn } from "@/utilities/utility";
import ProficiencyBar from "../ProficiencyBar";
import useInView from "@/utilities/hooks/useInView";

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState<Tech | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [ref, inView] = useInView<HTMLButtonElement>(0.01, "0px");

  return (
    <section
      className={cn({
        [style.techWrapper]: true,
        ["w-full lg:!px-24"]: selectedTech && isVisible,
      })}
    >
      <div
        className={cn({
          [style.wrapper]: true,
          ["w-full"]: selectedTech && isVisible,
        })}
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-4">
            <div className="w-12 h-[1px] bg-black"></div>
            <div className="text-xs md:text-lg font-bold uppercase tracking-[0.3em] text-text-secondary">
              inventory
            </div>
          </div>
          <div className={style.headingWrapper}>
            <div>Tech</div>
            <div className="text-text-secondary hover:text-black transition-colors duration-500 cursor-default">
              Stack
            </div>
          </div>
        </div>
        <div
          className={cn({
            ["flex flex-col md:flex-row max-h-max gap-4 md:gap-0"]:
              selectedTech,
          })}
        >
          <div
            className={cn({
              [style.techListWrapper]: true,
            })}
          >
            {techItems.map((Tech: Tech) => (
              <button
                ref={ref}
                className={cn({
                  [style.techItem]: true,
                  ["scale-100 mt-[10px] lg:-mt-[20px] opacity-100"]: !isVisible && inView,
                  ["scale-90 opacity-20"]: !isVisible && !inView,
                })}
                onClick={() => {
                  setSelectedTech(Tech);
                  setIsVisible(true);
                }}
                key={`tech-stack-${Tech.techName}`}
              >
                <img width={40} height={40} src={Tech.imageUrl} />
                <span className={style.techText}>{Tech.label}</span>
              </button>
            ))}
          </div>
          {isVisible && selectedTech && (
            <div
              className={cn({
                [style.techDetailwrapper]: true,
              })}
            >
              <div className="flex flex-row gap-4 items-center min-w-sm">
                <div className="w-28 p-4 overflow-hidden">
                  <img
                    src={selectedTech?.imageUrl}
                    style={{ width: "5rem", height: "5rem" }}
                  />
                </div>
                <div className="flex flex-col text-text-primary">
                  <span className="text-3xl font-bold">
                    {selectedTech?.label}
                  </span>
                  <span className="text-xs">
                    Proficiency : {selectedTech?.Proficiency}
                  </span>
                  <span className="flex flex-row items-center text-md">
                    Proficiency :{" "}
                    <ProficiencyBar
                      proficiencyLevel={selectedTech?.Proficiency}
                    />
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="absolute top-0 right-2 rotate-90">
                  <button onClick={() => setIsVisible(false)} title="close" className="rotate-45 text-3xl rounded-md cursor-pointer">+</button></div>
                {selectedTech?.context?.map((element: any) => (
                  <div
                    className="flex flex-row gap-4"
                    key={`${element?.label}`}
                  >
                    <span className="w-24 font-bold">{`${element?.label}`}</span>
                    <span className="font-bold">:</span>
                    <span className="text-text-secondary">
                      {element?.content}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
