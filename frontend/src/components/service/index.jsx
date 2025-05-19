import React, { useEffect, useState, useRef } from "react";

const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:',.<>/?~";

function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

const DURATION_TITLE = 5000;
const DURATION_SECTION_TITLE = 4500;
const DURATION_DESCRIPTION = 7000;

const ShufflingWordByWord = ({ text, active, duration = 4000 }) => {
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

export const ServicePage = () => {
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

  const titleFont = "font-semibold text-[64px] font-[BeauSansBold]";
  const descriptionFontLeftSide =
    "text-left max-w-4xl whitespace-pre-line break-words hyphens-none text-[20px] font-[beauSansItalic]";
  const descriptionFontRightSide =
    "text-right max-w-4xl whitespace-pre-line break-words hyphens-none text-[20px] font-[beauSansItalic]";

  return (
    <div
      ref={sectionRef}
      className={`flex items-center justify-center mt-50 transition-opacity duration-700 ${
        animate ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col w-full px-6">
        <div className="text-[64px] font-bold text-center mb-8 font-[BeauSansBold]">
          <ShufflingWordByWord text="SERVICES" active={animate} duration={DURATION_TITLE} />
        </div>

        <div className="flex flex-col items-start space-y-4">
          <div className={titleFont}>
            <ShufflingWordByWord text="PRE PRODUCTION" active={animate} duration={DURATION_SECTION_TITLE} />
          </div>
          <div className={descriptionFontLeftSide}>
            <ShufflingWordByWord
              text={`Every strong visual begins with a strong foundation. In pre-production, I provide support in visual treatment, shot planning, moodboard development, and camera consultation. This is where we shape the visual language and emotional tone of the project before the first frame is even shot.`}
              active={animate}
              duration={DURATION_DESCRIPTION}
            />
          </div>
        </div>

        <div className="flex flex-col items-end space-y-4 mt-8">
          <div className={titleFont}>
            <ShufflingWordByWord text="PRODUCTION" active={animate} duration={DURATION_SECTION_TITLE} />
          </div>
          <div className={descriptionFontRightSide}>
            <ShufflingWordByWord
              text={`As a cinematographer, I design and capture visuals that align with the story’s rhythm and emotional core. I work closely with the director, lighting team, and camera crew to craft frames that feel intentional, immersive, and honest. From studio setups to run-and-gun locations, I adapt my style to serve the story, not just aesthetics.`}
              active={animate}
              duration={DURATION_DESCRIPTION}
            />
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4 mt-10">
          <div className={titleFont}>
            <ShufflingWordByWord text="POST PRODUCTION" active={animate} duration={DURATION_SECTION_TITLE} />
          </div>
          <div className={descriptionFontLeftSide}>
            <ShufflingWordByWord
              text={`In post, I offer editing and color grading services to ensure a consistent visual flow from start to finish. My approach to post-production is not just technical—it's emotional. I shape pacing, tone, and color to preserve the soul of the footage, making sure the final cut feels as alive as the vision that started it.`}
              active={animate}
              duration={DURATION_DESCRIPTION}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
