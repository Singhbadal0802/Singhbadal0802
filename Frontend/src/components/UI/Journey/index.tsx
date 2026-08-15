"use client";
import { useEffect, useRef, useState } from "react";
import useInView from "@/utilities/hooks/useInView";
import { cn } from "@/utilities/utility";

type ExperienceEntry = {
  Id: number;
  CompanyName: string;
  Post: string;
  Duration?: string;
  Location?: string;
  Description?: string;
};

/** Company initials for the avatar badge, e.g. "Suretech Infosoft" → "SI". */
const initials = (name: string) =>
  name
    .replace(/pvt\.?\s*ltd\.?/gi, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

/** Tracks how far the trail has been scrolled through, 0 → 1. */
function useTrailProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height + viewportH * 0.5;
      const seen = viewportH * 1 - rect.top;
      setProgress(Math.min(1, Math.max(0, seen / total)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return [ref, progress] as const;
}

const Journey = () => {
  const [trailRef, progress] = useTrailProgress<HTMLDivElement>();
  const [Experience, setExperience] = useState<ExperienceEntry[]>([]);
  const url = '/api/getExperience';

  useEffect(() => {
    const getResponse = async () => {
      try {
        const response: any = await fetch(url);

        const data = await response.json();

        if (data?.status?.toLowerCase() === "success") {
          setExperience(data?.data ?? []);
        } else {
          throw new Error("Didn't get the Experience response");
        }
      } catch (error) {
        console.error("Error in fetching Experience : ", error);
      }
    };

    void getResponse();
  }, []);

  return (
    <section className="w-full bg-[#ccd5ae] relative py-20 md:py-32 overflow-hidden">
      {/* Ambient texture: a couple of soft organic blobs so the sage field isn't flat */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-16 w-56 h-56 rounded-full bg-stone-900/5 blur-3xl"
      />

      {/* Header */}
      <div className="relative mx-6 md:mx-32 mb-14 md:mb-28 flex flex-col gap-2">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-8 md:w-12 h-[1px] bg-stone-700" />
          <span className="text-[10px] md:text-sm font-bold uppercase tracking-[0.25em] md:tracking-[0.3em] text-stone-600">
            where I've been
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-stone-800">
          The Journey
        </h2>
      </div>

      {/* Trail */}
      <div ref={trailRef} className="relative">
        {/* Dashed base line */}
        <div
          aria-hidden
          className="absolute left-[35px] md:left-1/2 top-2 bottom-0 md:-translate-x-1/2 border-l-4 border-dashed border-stone-500/50"
        />
        {/* Solid fill line, grows with scroll */}
        <div
          aria-hidden
          className="absolute left-[35px] md:left-1/2 top-2 md:-translate-x-1/2 border-l-4 border-stone-800 origin-top transition-[height] duration-150 ease-out"
          style={{ height: `${progress * 100}%` }}
        />

        <div className="flex flex-col gap-14 sm:gap-20 md:gap-32">
          {Experience.map((company, index) => (
            <Stop
              key={company.Id}
              company={company}
              index={index}
              isCurrent={index === Experience.length - 1}
              align={index % 2 === 0 ? "start" : "end"}
            />
          ))}
        </div>

        {/* Trailhead marker at the very top */}
        <div className="absolute left-[30px] md:left-1/2 -top-2 md:-translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-stone-800 ring-4 ring-[#ccd5ae]" />
      </div>
    </section>
  );
};

const Stop = ({
  company,
  index,
  isCurrent,
  align,
}: {
  company: ExperienceEntry;
  index: number;
  isCurrent: boolean;
  align: "start" | "end";
}) => {
  const [ref, inView] = useInView<HTMLDivElement>(0.25);
  const order = String(index + 1).padStart(2, "0");
  const isRight = align === "end";

  return (
    <div
      ref={ref}
      className={
        "relative flex mx-8 lg:mx-32 " +
        (isRight ? "md:justify-end" : "md:justify-start")
      }
    >
      {/* Waypoint dot */}
      <div
        className={
          "absolute left-[5px] md:left-0 top-10 h-7 w-7 -translate-x-1/2 rounded-full border-4 border-[#ccd5ae] transition-all duration-500 md:left-1/2 " +
          (inView ? "scale-100 opacity-100" : "scale-50 opacity-0") +
          " " +
          (isCurrent ? "bg-stone-900" : "bg-stone-600")
        }
      >
        {isCurrent && (
          <span className="absolute inset-0 rounded-full bg-stone-900 animate-ping-slow" />
        )}
      </div>

      <div
        className={
          cn({
            ["transition-all duration-700 ease-out w-full md:w-[42%] "] : true,
            ["opacity-100 translate-y-0"] : inView,
            ["opacity-0 translate-y-8"] : !inView,
          })
        }
      >
        <div className="group relative ml-10 md:ml-0 bg-white rounded-2xl shadow-md shadow-stone-900/10 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-900/15 transition-all duration-300">
          {/* Accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-stone-700 via-[#8a9a5b] to-stone-700" />

          <div className="p-5 md:p-8 flex flex-col gap-4">
            {/* Top row: avatar + order/current */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="shrink-0 h-11 w-11 md:h-12 md:w-12 rounded-xl bg-stone-800 text-white flex items-center justify-center font-bold text-sm tracking-wide">
                  {initials(company.CompanyName)}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-lg md:text-2xl font-bold text-stone-800 leading-tight truncate">
                    {company.Post}
                  </span>
                  <span className="text-xs md:text-base text-stone-500 truncate">
                    {company.CompanyName}
                  </span>
                </div>
              </div>
              <span className="shrink-0 text-[10px] md:text-xs font-bold tracking-[0.2em] text-stone-300">
                {order}
              </span>
            </div>

            {/* Duration + current badge */}
            {(company.Duration || company.Location || isCurrent) && (
              <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-stone-100">
                {company.Duration && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] md:text-xs font-medium text-stone-600 bg-stone-100 px-2.5 py-1 rounded-full mt-3">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="shrink-0"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    {company.Duration}
                  </span>
                )}
                {company.Location && (
                  <span className="text-[11px] md:text-xs text-stone-400 mt-3">
                    {company.Location}
                  </span>
                )}
                {isCurrent && (
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full mt-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping-slow" />
                    current
                  </span>
                )}
              </div>
            )}

            {company.Description && (
              <p className="text-sm text-stone-600 leading-relaxed">
                {company.Description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;