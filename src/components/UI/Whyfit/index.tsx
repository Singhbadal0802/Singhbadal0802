import React from "react";

const WhyFit = () => {
  return (
    <div className="flex flex-col py-4 md:py-8 lg:px-24 lg:py-16 gap-2 lg:gap-4 mx-auto w-full bg-linear-to-r from-[#ccd5ae] to-white">
      <div className="flex flex-row items-center mx-4 lg:mx-0 gap-4 text-md md:text-lg font-bold uppercase tracking-[0.3em] text-black">
        <div className="w-12 h-[1px] bg-black"></div>Why I'm a Good Fit
      </div>
      <div className='px-16'>I build responsive, user-friendly web applications with a focus on <i className='font-bold'>Clean code, Performance and Maintainability.</i> I enjoy solving problems, learning new technologies, and collaborating with teams to deliver high-quality digital experiences.</div>
      <div className="w-full px-17">
        <ul className="list-disc space-y-1">
          <li>Strong foundation in modern frontend development.</li>
          <li>
            Experience working in Agile teams and enterprise environments.
          </li>
          <li>
            Quick learner who adapts to new technologies and business domains.
          </li>
          <li>
            Focused on writing maintainable, scalable, and user-friendly
            solutions.
          </li>
          <li>
            Effective collaborator with developers, QA teams, designers, and
            stakeholders.
          </li>
          <li>Committed to continuous learning and professional growth.</li>
          <li>
            Passionate about delivering value through technology and solving
            real-world problems.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyFit;
