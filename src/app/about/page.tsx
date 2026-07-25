import React from 'react'
import style from '@/components/UI/WorkHero/style'

const About = () => {
    const aboutMeHeader = "Hi, I'm Badal.";
    const aboutMeTitle = 'Frontend Developer | React • Next.js • TypeScript';
    const aboutMeDescription = 'I enjoy building fast, scalable, and user-friendly web applications while constantly learning how software works under the hood.';
  return (
    <div className="flex flex-col py-4 md:py-8 lg:px-24 lg:py-16 gap-2 lg:gap-4 mx-auto w-full bg-linear-to-r from-[#ccd5ae] to-white !pt-40">
        <div className='flex flex-row'><div className='text-2xl md:text-4xl lg:text-6xl font-black text-black tracking-tighter leading-[1.2]'>👋 </div>
      <div className="flex flex-col items-start mx-4 lg:mx-0 gap-4 text-md md:text-lg font-bold uppercase tracking-[0.3em] text-black">
              <div className={style.firstname}>
                <span>{aboutMeHeader}
                </span>
              </div>
        <div className={`w-full text-black`}>{aboutMeTitle}</div>
      </div>
      </div>
      <div className='px-20 '>{aboutMeDescription}</div>
    </div>
  )
}

export default About