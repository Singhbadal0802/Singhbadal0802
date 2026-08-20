import React from "react";

type IconProps = { className?: string };

export const CollaborateIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const GitIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.75 97.75" width="24" height="24" fill="white" className={className}>
    <path d="M92.71,44.41,53.34,5a7.17,7.17,0,0,0-10.15,0L35,13.19l10.4,10.4a8.49,8.49,0,0,1,10.75,10.82L66.2,44.46a8.5,8.5,0,1,1-5.1,4.79L51.76,39.91V64.48a8.5,8.5,0,1,1-7,0V39.67a8.49,8.49,0,0,1-4.6-11.13L30,18.39,5,43.36a7.18,7.18,0,0,0,0,10.16L44.41,92.71a7.18,7.18,0,0,0,10.16,0L92.71,54.57A7.18,7.18,0,0,0,92.71,44.41Z" />
  </svg>
);

export const GithubIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white" className={className} aria-hidden="true">
    <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.004-.404c1.018.005 2.044.138 3.004.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.241 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.103.823 2.222 0 1.606-.015 2.902-.015 3.297 0 .321.216.694.825.576C20.565 22.092 24 17.596 24 12.297 24 5.67 18.627.297 12 .297z" />
  </svg>
);

export const LinkedInIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white" className={className} aria-hidden="true">
    <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.345V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.601 0 4.27 2.37 4.27 5.455v6.286zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// Defined once, at module scope — not recreated on every render
export const IconMap: Record<string, React.ReactNode> = {
  Collaborate: (
    <CollaborateIcon className="relative z-10 flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest" />
  ),
  Git: <GitIcon />,
  GitHub: <GithubIcon />,
  LinkedIn: <LinkedInIcon />,
};