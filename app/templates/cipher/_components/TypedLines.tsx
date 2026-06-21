"use client";

import { useEffect, useState } from "react";

export type TerminalLine = {
  text: string;
  prefix?: string;
  color?: string;
};

export default function TypedLines({
  lines,
  startDelay = 300,
  speed = 22,
  lineDelay = 260,
}: {
  lines: TerminalLine[];
  startDelay?: number;
  speed?: number;
  lineDelay?: number;
}) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let active = true;

    function typeLine(idx: number, delay: number) {
      const text = lines[idx]?.text ?? "";
      let i = 0;
      const start = setTimeout(() => {
        const interval = setInterval(() => {
          if (!active) return clearInterval(interval);
          i += 1;
          setCharCount(i);
          if (i >= text.length) {
            clearInterval(interval);
            if (idx + 1 < lines.length) {
              const next = setTimeout(() => {
                setLineIndex(idx + 1);
                setCharCount(0);
                typeLine(idx + 1, 0);
              }, lineDelay);
              timers.push(next);
            }
          }
        }, speed);
        timers.push(interval as unknown as ReturnType<typeof setTimeout>);
      }, delay);
      timers.push(start);
    }

    typeLine(0, startDelay);

    return () => {
      active = false;
      timers.forEach((t) => clearTimeout(t));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {lines.map((line, idx) => {
        const isDone = idx < lineIndex;
        const isActive = idx === lineIndex;
        if (!isDone && !isActive) return null;
        const shown = isDone ? line.text : line.text.slice(0, charCount);
        return (
          <div key={idx} className="cipher-term-line">
            {line.prefix && <span className="cipher-term-prefix">{line.prefix}</span>}
            <span style={{ color: line.color }}>{shown}</span>
            {isActive && charCount < line.text.length && <span className="cipher-term-caret" />}
          </div>
        );
      })}
      <style>{`
        .cipher-term-line { white-space: pre-wrap; line-height: 1.6; }
        .cipher-term-prefix { color: #39ff8c; margin-right: 6px; }
        .cipher-term-caret {
          display: inline-block;
          width: 7px;
          height: 1em;
          margin-left: 2px;
          background-color: #39ff8c;
          transform: translateY(0.12em);
          animation: cipher-caret-blink 0.9s step-end infinite;
        }
        @keyframes cipher-caret-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </>
  );
}
