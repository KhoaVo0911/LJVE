import React from "react";
import ShufflingWordByWord from "../shufferingWords";

const DURATION_TITLE = 5000;
const DURATION_SECTION_TITLE = 4500;
const DURATION_DESCRIPTION = 7000;

export const ServicePage = ({ animate, reverse }) => {
  const titleFont = "font-extrabold text-lg md:text-3xl font-[BeauSansBold]";
  const descriptionFontLeftSide =
    "text-left max-w-2xl whitespace-pre-line break-words hyphens-none font-[beauSansItalic] text-accent text-[11px] md:text-[16px]";
  const descriptionFontRightSide =
    "text-right max-w-2xl whitespace-pre-line break-words hyphens-none font-[beauSansItalic] text-accent text-[11px] md:text-[16px]";

  return (
    <div className="flex flex-col w-full mt-[30vh]">
      <div className="text-2xl md:text-4xl font-extrabold text-center mb-8 font-[BeauSansBold] ">
        <ShufflingWordByWord
          text="SERVICES"
          active={animate}
          reverse={reverse}
          duration={DURATION_TITLE}
        />
      </div>

      <div className="flex flex-col items-start space-y-4">
        <div className={titleFont}>
          <ShufflingWordByWord
            text="PRE PRODUCTION"
            active={animate}
            reverse={reverse}
            duration={DURATION_SECTION_TITLE}
          />
        </div>
        <div className={descriptionFontLeftSide}>
          <ShufflingWordByWord
            text={`Every strong visual begins with a strong foundation. In pre-production, I provide support in visual treatment, shot planning, moodboard development, and camera consultation. This is where we shape the visual language and emotional tone of the project before the first frame is even shot.`}
            active={animate}
            reverse={reverse}
            duration={DURATION_DESCRIPTION}
          />
        </div>
      </div>

      <div className="flex flex-col items-end space-y-4 mt-8">
        <div className={titleFont}>
          <ShufflingWordByWord
            text="PRODUCTION"
            active={animate}
            reverse={reverse}
            duration={DURATION_SECTION_TITLE}
          />
        </div>
        <div className={descriptionFontRightSide}>
          <ShufflingWordByWord
            text={`As a cinematographer, I design and capture visuals that align with the story’s rhythm and emotional core. I work closely with the director, lighting team, and camera crew to craft frames that feel intentional, immersive, and honest. From studio setups to run-and-gun locations, I adapt my style to serve the story, not just aesthetics.`}
            active={animate}
            reverse={reverse}
            duration={DURATION_DESCRIPTION}
          />
        </div>
      </div>

      <div className="flex flex-col items-start space-y-4 mt-10">
        <div className={titleFont}>
          <ShufflingWordByWord
            text="POST PRODUCTION"
            active={animate}
            reverse={reverse}
            duration={DURATION_SECTION_TITLE}
          />
        </div>
        <div className={descriptionFontLeftSide}>
          <ShufflingWordByWord
            text={`In post, I offer editing and color grading services to ensure a consistent visual flow from start to finish. My approach to post-production is not just technical—it's emotional. I shape pacing, tone, and color to preserve the soul of the footage, making sure the final cut feels as alive as the vision that started it.`}
            active={animate}
            reverse={reverse}
            duration={DURATION_DESCRIPTION}
          />
        </div>
      </div>
    </div>
  );
};
