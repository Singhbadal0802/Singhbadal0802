import react from "react";
import style from "./style";

const Hero = () => {
  const renderButtonSection = (customStyle: string) => (
    <div className={customStyle}>
      <div className={style.post}>
        <div className="w-12 h-[1px] bg-black"></div>
        <div className={style.postnamewrapper}>frontend developer</div>
      </div>
      <div className="flex flex-row gap-4">
        <a
          href="mailto:badalrkt23@gmail.com"
          className={style.collaborateButton}
          accessKey="c"
        >
          <div className={style.collaborateContent}>
            Collaborate{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className={style.collaborateArrowSvg}
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </a>
        <div>
          <button className={style.resumeButton}>
            <span>Resume</span>
            <a href="/files/document.pdf" target="_blank">
              <img
                width={16}
                height={16}
                className={style.resumeViewImg}
                src="/documentIcon.png"
                alt="download"
              />
            </a>
            <a href="/files/document.pdf" download>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className={style.resumeDownloadSvg}
                aria-hidden="true"
              >
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
            </a>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className={style.wrapper}>
      <div className={style.contentwrapper}>
        <div className={style.firstname}>
          <span>BADAL</span>
          <span className={style.lastname}>SINGH</span>
        </div>
        <div>
          Hi! I'm. A creative Frontend Developer with 2+ years of experience in
          building high-performance, scalable, and responsive web solutions.
        </div>
        {renderButtonSection("hidden md:block")}
      </div>
      <div className="image-wrapper">
        <div className="overflow-hidden">
          <div className={style.profileImgContainer}>
            <img src="/Media.png" alt="profile" />
          </div>
        </div>
      </div>
      {renderButtonSection("block md:hidden")}
    </section>
  );
};

export default Hero;
