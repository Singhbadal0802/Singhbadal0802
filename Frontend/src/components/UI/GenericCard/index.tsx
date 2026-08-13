'use client'
import React from 'react';
import useInView from '@/utilities/hooks/useInView';
import { cn } from '@/utilities/utility';
import Counter from '@/utilities/counter/counterEffect';

type ExperienceEntry = {
  Id: number;
  CompanyName: string;
  Post: string;
  Duration?: string;
  IconContent?: number;
  Location?: string;
  Description?: string;
};

const Experience: ExperienceEntry[] = [
    {
    Id: 1,
    CompanyName: "Building modern web applications with React, Next.js, TypeScript, and AEM while delivering production-ready features.",
    Post: "Years Experience",
    IconContent : 2
  },
  {
    Id: 2,
    CompanyName: "From planning to deployment, shipping features used by real customers with a focus on quality and maintainability.",
    Post: "Production Features Delivered",
    IconContent : 20
  },
  {
    Id: 3,
    CompanyName: "Resolving UI, API, accessibility, and business logic issues to improve stability and user experience.",
    Post: "Bugs Fixed",
    IconContent : 250
  }
];

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
        className={cn({
          ["transition-all duration-700 ease-out w-full md:w-[42%] "]: true,
          ["opacity-100 translate-y-0"]: inView,
          ["opacity-0 translate-y-8"]: !inView,
        })}
      >
        <div className="group relative bg-white rounded-2xl shadow-md shadow-stone-900/10 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-900/15 transition-all duration-300">
          {/* Accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-stone-700 via-[#8a9a5b] to-stone-700" />

          <div className="p-5 md:p-8 flex flex-col gap-4">
            {/* Top row: avatar + order/current */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 min-w-0">
                <div className="flex h-auto rounded-xl text-2xl bg-stone-800 text-white items-center justify-center font-bold transition-al duration-200">
                  <div className='h-12 min-w-12 w-auto p-2'>{`${Counter(company.IconContent ?? 0, company.Id === 1 ? 500 : undefined)}+`}</div>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-lg md:text-2xl font-bold text-stone-800 leading-tight truncate">
                    {company.Post}
                  </span>
                  <div className="text-xs md:text-base text-stone-500 !line-clamp-2 text-clamp" >
                    {company.CompanyName}
                  </div>
                </div>
              </div>
              {/* <span className="shrink-0 text-[10px] md:text-xs font-bold tracking-[0.2em] text-stone-300">
                {order}
              </span> */}
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
  );
};

const GenericCard = () => {
  return (
    <div className='flex gap-8 w-full p-8'>
      {Experience.map((company, index) => (
        <Stop
          key={company.Id}
          company={company}
          index={index}
          isCurrent={false}
          align={index % 2 === 0 ? "start" : "end"}
        />
      ))}
    </div>
  );
}

export default GenericCard