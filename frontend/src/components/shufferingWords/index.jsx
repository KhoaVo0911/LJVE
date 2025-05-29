import React, { useEffect, useState, useRef } from "react";

const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:',.<>/?~";

function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

const ShufflingWordByWord = ({ text, active, reverse, duration = 4000 }) => {
  const [displayedText, setDisplayedText] = useState(text.replace(/\S/g, " "));
  const frameIdRef = useRef(null);
  const startTimeRef = useRef(null);
  const currentTextRef = useRef(text.replace(/\S/g, " "));
  const animationModeRef = useRef<"none" | "show" | "hide">("none");

useEffect(() => {
  let animationFrameId;

  if (!active && !reverse) {
    currentTextRef.current = text.replace(/\S/g, " ");
    setDisplayedText(currentTextRef.current);
    return;
  }

  const letters = text.split("");
  const totalDuration = duration;
  const letterDuration = totalDuration / letters.length;

  const reset = () => {
    startTimeRef.current = null;
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
  };

  const animateShow = (time) => {
    if (!startTimeRef.current) startTimeRef.current = time;
    const elapsed = time - startTimeRef.current;

    const newText = letters
      .map((char, index) => {
        const letterStart = letterDuration * index;
        if (elapsed > letterStart + letterDuration) {
          return char;
        } else if (elapsed > letterStart) {
          return char === " " ? " " : randomChar();
        } else {
          return " ";
        }
      })
      .join("");

    currentTextRef.current = newText;
    setDisplayedText(newText);

    if (elapsed < totalDuration + letterDuration) {
      animationFrameId = requestAnimationFrame(animateShow);
    } else {
      currentTextRef.current = text;
      setDisplayedText(text);
      reset();
    }
  };

  const animateHide = (time) => {
    if (!startTimeRef.current) startTimeRef.current = time;
    const elapsed = time - startTimeRef.current;

    const currentLetters = currentTextRef.current.split("");

    const newText = letters
      .map((char, index) => {
        const letterEnd = letterDuration * index;
        if (elapsed > letterEnd + letterDuration) {
          return " ";
        } else if (elapsed > letterEnd) {
          return currentLetters[index] === " " ? " " : randomChar();
        } else {
          return currentLetters[index];
        }
      })
      .join("");

    currentTextRef.current = newText;
    setDisplayedText(newText);

    if (elapsed < totalDuration + letterDuration) {
      animationFrameId = requestAnimationFrame(animateHide);
    } else {
      currentTextRef.current = text.replace(/\S/g, " ");
      setDisplayedText(currentTextRef.current);
      reset();
    }
  };

  if (active && !reverse) {
    reset();
    animationFrameId = requestAnimationFrame(animateShow);
  } else if (reverse) {
    reset();
    animationFrameId = requestAnimationFrame(animateHide);
  }

  return () => {
    reset();
  };
}, [active, reverse, text, duration]);


  return <span>{displayedText}</span>;
};

export default ShufflingWordByWord;
