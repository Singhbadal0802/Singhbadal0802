"use client";

import React, { useEffect, useState } from "react";
import style from "./style";

const VIDEO_SOURCES = ["laptop", "web-developer", "work-hero"] as const;

/**
 * Picks a random hero video on the client only.
 * Avoided during SSR to prevent a hydration mismatch between
 * server-rendered and client-rendered <video src>.
 */
function useRandomHeroVideo(sources: readonly string[]) {
  const [videoFile, setVideoFile] = useState<string | null>(null);

  useEffect(() => {
    const index = Math.floor(Math.random() * sources.length);
    console.log('index of source file : ', index);
    setVideoFile(sources[index]);
  }, [sources]);

  return videoFile;
}

const WorkHero = () => {
  const videoFile = useRandomHeroVideo(VIDEO_SOURCES);

  return (
    <section className="flex flex-col md:flex-row gap-4 lg:gap-16 bg-[#ccd5ae] rounded-2xl w-full p-8">
      <div className="flex flex-col gap-4 lg:gap-8 text-sm">
        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.3em] text-black">
          Believe, to build perfect
          <span className={style.lastname}> with time.</span>
        </h1>
        <p>If I take longer, expect something better than imagined.</p>
      </div>

      <div className="flex min-w-[230px] h-80 overflow-hidden rounded-[30%_70%_60%_40%/30%_30%_70%_70%] bg-white shadow-xl/30 bg-linear-to-r from-blue-600 to-white">
        {videoFile && (
          <video
            className="w-full h-full object-cover motion-reduce:hidden"
            muted
            autoPlay
            loop
            playsInline
            poster={`/${videoFile}-poster.jpg`}
            src={`/${videoFile}.mp4`}
          />
        )}
      </div>
    </section>
  );
};

export default WorkHero;
