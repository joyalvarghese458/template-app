"use client";

import { useEffect, useState } from "react";

export default function TypedCode({
  text,
  startDelay = 0,
  speed = 34,
  className,
  style,
}: {
  text: string;
  startDelay?: number;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, startDelay, speed]);

  const done = count >= text.length;

  return (
    <span className={className} style={style}>
      <span aria-hidden="true">
        {text.slice(0, count)}
        <span
          style={{
            display: "inline-block",
            width: "8px",
            height: "1em",
            marginLeft: "2px",
            backgroundColor: "#22d3ee",
            opacity: done ? 0 : 1,
            animation: done ? undefined : "cortex-caret-blink 0.9s step-end infinite",
            transform: "translateY(0.12em)",
          }}
        />
      </span>
      <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
        {text}
      </span>
      <style>{`
        @keyframes cortex-caret-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
