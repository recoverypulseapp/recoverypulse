"use client";

import { useEffect, useState } from "react";
export default function CountUp(
  { value, duration = 1200 }: { value: number | string; duration?: number }
) {

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(String(value).replace(/[^0-9.-]/g, ""));

    if (isNaN(end)) return;

    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count.toFixed(0)}</span>;
}
