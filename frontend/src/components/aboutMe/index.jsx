import { CarouselPage } from "@/components/carousel";
import { EmailDown, PhoneTelephone } from "@icon-park/react";
import React from "react";

export const AboutMePage = () => {
  return (
    <div className="px-4 sm:px-6 w-full">
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-16">
        <div className="flex flex-col items-start space-y-4 md:space-y-8 w-full md:w-3/5">
          <div>
            <div className="text-2xl sm:text-4xl md:text-[64px] font-[Neogrotesk-AltBold] mt-4 mb-2 text-center md:text-left">
              ABOUT ME
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full px-0 text-base sm:text-lg leading-7 sm:leading-8 mb-8 text-left">
              I'm Nguyen Tuan Khang, a Vietnamese cinematographer based in
              Saigon. My work explores the intersection between emotional
              storytelling and visual precision, where every frame is designed
              not just to be seen, but to be felt.
              <br />
              <br />
              With a background in both film and digital media, I specialize in
              crafting imagery that enhances mood, rhythm, and psychological
              depth. Whether I'm behind the camera on a short film, a music
              video, or a commercial piece, I approach each project with a
              strong sense of atmosphere, lighting design, and narrative intent.
              <br />
              <br />I believe cinematography is not just about capturing what's
              in front of the lens, but about shaping the audience's emotional
              journey, frame by frame, shadow by shadow, light by light.
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-2 md:mt-5 text-xs sm:text-sm md:text-base mb-4">
            <EmailDown theme="outline" size="24" fill="#ffffff" />
            <span>tk02052000tk@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base mb-8">
            <PhoneTelephone theme="outline" size="24" fill="#ffffff" />
            <span>+84 98 5588 048</span>
          </div>
        </div>
        <div className="w-full md:w-2/5 mt-8 md:mt-0 flex justify-center md:justify-end">
          <div className="w-full max-w-xs sm:max-w-sm aspect-[4/3] md:max-w-full md:aspect-auto flex justify-center md:justify-end md:ml-20 mt-8 mb-8 md:mt-0 md:mb-0">
            <CarouselPage />
          </div>
        </div>
      </div>
    </div>
  );
};
