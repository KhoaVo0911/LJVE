import React, { useEffect, useState, useRef } from "react";

const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:',.<>/?~";

function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

const DURATION_LINE = 2000; 

const ShufflingLine = ({ text, active, duration = DURATION_LINE }) => {
  const [displayedText, setDisplayedText] = useState(() =>
    text.replace(/\S/g, " ")
  );
  const frameIdRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!active) {
      setDisplayedText(text);
      return;
    }

    const letters = text.split("");
    const totalDuration = duration;
    const letterRevealDelay = totalDuration / letters.length;

    function animate(time) {
      if (!startTimeRef.current) startTimeRef.current = time;
      const elapsed = time - startTimeRef.current;

      const newText = letters
        .map((char, index) => {
          const letterStart = letterRevealDelay * index;
          if (elapsed > letterStart + letterRevealDelay) {
            return char;
          } else if (elapsed > letterStart) {
            return char === " " ? " " : randomChar();
          } else {
            return char === " " ? " " : " ";
          }
        })
        .join("");

      setDisplayedText(newText);

      if (elapsed < totalDuration + letterRevealDelay) {
        frameIdRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayedText(text);
      }
    }

    frameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
      startTimeRef.current = null;
    };
  }, [active, text, duration]);

  return <span>{displayedText}</span>;
};

export const IdiomPage = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const lines = [
    `“Cinema is not what I see. It’s what I make others feel.`,
    `Let’s turn your vision into frames worth remembering.”`,
  ];

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center mt-[50vh] mb-[40vh] text-[20px]"
    >
      <div className="font-[beauSansItalic] whitespace-pre-line text-center max-w-3xl px-6">
        {lines.map((line, idx) => (
          <div key={idx} className="mb-2">
            <ShufflingLine
              text={line}
              active={animate}
              duration={DURATION_LINE}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
