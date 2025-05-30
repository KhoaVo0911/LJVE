import { useEffect, useRef, useState } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:',.<>/?~";

const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)];

export const useShuffler = (text, animate, reverse) => {
  const [displayedText, setDisplayedText] = useState(() =>
    text.replace(/[^\n ]/g, " ")
  );

  const intervalRef = useRef(null);
  const frameIndex = useRef(0);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    const finalChars = text.split("");

    if (animate && !reverse) {
      frameIndex.current = 0;

      intervalRef.current = setInterval(() => {
        setDisplayedText((prev) => {
          const updated = [...prev];

          for (let i = 0; i < finalChars.length; i++) {
            if (finalChars[i] === "\n" || finalChars[i] === " ") {
              updated[i] = finalChars[i];
            } else if (i < frameIndex.current) {
              updated[i] = finalChars[i];
            } else if (i === frameIndex.current) {
              updated[i] = getRandomChar();
            } else {
              updated[i] = " ";
            }
          }

          return updated.join("");
        });

        frameIndex.current++;

        if (frameIndex.current > finalChars.length) {
          clearInterval(intervalRef.current);
          setDisplayedText(text);
        }
      }, 30);
    }

    if (reverse) {
      frameIndex.current = 0;

      intervalRef.current = setInterval(() => {
        setDisplayedText((prev) => {
          const updated = [...prev];

          const targetIndex = finalChars.length - 1 - frameIndex.current;

          for (let i = 0; i < finalChars.length; i++) {
            if (finalChars[i] === "\n" || finalChars[i] === " ") {
              updated[i] = finalChars[i];
            } else if (i > targetIndex) {
              updated[i] = " ";
            } else if (i === targetIndex) {
              updated[i] = getRandomChar();
            } else {
              updated[i] = finalChars[i];
            }
          }

          return updated.join("");
        });

        frameIndex.current++;

        if (frameIndex.current > finalChars.length) {
          clearInterval(intervalRef.current);
          setDisplayedText(text.replace(/[^\n ]/g, " "));
        }
      }, 30);
    }

    return () => clearInterval(intervalRef.current);
  }, [animate, reverse, text]);

  return displayedText;
};