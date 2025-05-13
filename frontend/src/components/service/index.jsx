import React from "react";

export const ServicePage = () => {
    const titleFont = "font-semibold text-[64px] font-[BeauSansBold]";
    const descriptionFontLeftSide = "text-left max-w-4xl whitespace-pre-line break-words hyphens-none text-[20px] font-[beauSansItalic]";
    const descriptionFontRightSide = "text-right max-w-4xl whitespace-pre-line break-words hyphens-none text-[20px] font-[beauSansItalic]";

  return (
    <div className="flex items-center justify-center mt-30">
      <div className="flex flex-col w-full ">
        <div className="text-[64px] font-bold text-center mb-8 font-[BeauSansBold]">SERVICES</div>

        <div className="flex flex-col items-start space-y-4">
          <div className={titleFont}>PRE PRODUCTION</div>
          <div className={descriptionFontLeftSide}>
            Every strong visual begins with a strong foundation. In pre-production, I provide support in visual treatment, shot planning, moodboard development, and camera consultation. This is where we shape the visual language and emotional tone of the project before the first frame is even shot.
          </div>
        </div>

        <div className="flex flex-col items-end space-y-4 mt-8">
          <div className={titleFont}>PRODUCTION</div>
          <div className={descriptionFontRightSide}>
            As a cinematographer, I design and capture visuals that align with the story’s rhythm and emotional core. I work closely with the director, lighting team, and camera crew to craft frames that feel intentional, immersive, and honest. From studio setups to run-and-gun locations, I adapt my style to serve the story, not just aesthetics.
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4 mt-10">
          <div className={titleFont}>POST PRODUCTION</div>
          <div className={descriptionFontLeftSide}>
            In post, I offer editing and color grading services to ensure a consistent visual flow from start to finish. My approach to post-production is not just technical—it's emotional. I shape pacing, tone, and color to preserve the soul of the footage, making sure the final cut feels as alive as the vision that started it.
          </div>
        </div>
      </div>
    </div>
  );
};
