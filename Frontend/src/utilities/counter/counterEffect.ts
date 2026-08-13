import { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
}

export default function Counter(
  end : number,
  duration : number = 2000,
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    const increment = end / totalFrames;

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count.toLocaleString()
}