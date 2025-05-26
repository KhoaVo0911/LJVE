import React from "react";
import ShufflingWordByWord from "../shufferingWords";

export const IdiomPage = ({ animate, reverse }) => {
  const lines = [
    "“Cinema is not what I see. It’s what I make others feel.",
    "Let’s turn your vision into frames worth remembering.”",
  ];

  return (
    <div className="flex flex-col items-center mt-[50vh] mb-[40vh] text-[20px]">
      <div className="font-[beauSansItalic] whitespace-pre-line text-center max-w-3xl px-6">
        {lines.map((line, idx) => (
          <div key={idx} className="mb-2">
            <ShufflingWordByWord
              text={line}
              active={animate}
              reverse={reverse}
              duration={4000}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
