"use client";
import React, { useEffect, useState } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function sortArray(
  array: number[],
  setOutput: React.Dispatch<React.SetStateAction<number[]>>,
  setIterationIndex: React.Dispatch<React.SetStateAction<number>>,
  setChangeableIndex: React.Dispatch<React.SetStateAction<number>>,
  setMonoIterationIndex: React.Dispatch<React.SetStateAction<number>>,
) {
  let arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    setIterationIndex(i);
    let min_idx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
        setMonoIterationIndex(j);
      }
      setChangeableIndex(j);
      await sleep(2000);
    }

    [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
    
    setOutput([...arr]);
    await sleep(500);
    setMonoIterationIndex(0);
    await sleep(2000);
  }
//   setOutput([...array]);
}

const SortingGraph = () => {
  let data = [5, 3, 8, 1, 2, 7, 4];
  const [output, setOutput] = useState<number[]>(data);
  const [iterationIndex, setIterationIndex] = useState<number>(0);
  const [changableIndex, setChangeableIndex] = useState<number>(0);
  const [monoIterationIndex, setMonoIterationIndex] = useState<number>(0);

  useEffect(() => {
    sortArray(
      data,
      setOutput,
      setIterationIndex,
      setChangeableIndex,
      setMonoIterationIndex,
    );
  }, []);


  const renderElements = () => (
    <div className="flex flex-wrap gap-4 my-8 p-4">
      {output?.map((element: number, index: number) => (
        <div
          key={`sorting-array-element-${element}`}
        //   style={{
        //     transform: `translateY(${Math.abs((Math.floor(output.length / 2) - index) * 30)}px)`,
        //     transition: "transform 0.5s ease-in-out",
        //   }}
          className={`
            rounded-full
            transition-all
            duration-500
            ease-in-out
            ${
              iterationIndex >= index
                ? "ring-2 ring-green-400"
                : monoIterationIndex === index
                  ? "ring-2 ring-red-400"
                  : changableIndex === index
                    ? "ring-2 ring-black"
                    : "ring-0"
            }
        `}
        >
          <div className="flex rounded-full bg-blue-300 justify-center items-center p-2 h-8 w-8">
            <span>{element}</span>
          </div>
        </div>
      ))}
    </div>
  );

  console.log(output);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h3 className="font-bold text-xl">SortingGraph</h3>
      {renderElements()}
    </div>
  );
};

export default SortingGraph;
