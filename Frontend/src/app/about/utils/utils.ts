import { WhyDrive } from "../type";

type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "x" | "mail";
};

export const ABOUT_ME = {
  header: "Hi, I'm Badal.",
  title: "Frontend Developer | React • Next.js • TypeScript",
  description:
    "I enjoy building fast, scalable, and user-friendly web applications while constantly learning how software works under the hood.",
};

export const WHY_DRIVES_ME: WhyDrive[] = [
  { id: 1, title: "🧠 Problem Solver", description: "I enjoy debugging complex issues and finding clean, maintainable solutions." },
  { id: 2, title: "🚀 Continuous Learner", description: "Always exploring JavaScript internals, React, algorithms, and full-stack development." },
  { id: 3, title: "⚡ Performance Focused", description: "I care about writing efficient, scalable, and accessible applications." },
  { id: 4, title: "💡 Builder", description: "I love turning ideas into real projects that help me learn something new." },
];

export const SOCIAL_BUTTONS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Singhbadal0802", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/badal-singh-a32715354", icon: "linkedin" },
  { label: "Collaborate", href: "mailto:badalrkt23@gmail.com", icon: "x" },
];