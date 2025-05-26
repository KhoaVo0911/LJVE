import { CarouselPage } from "@/components/carousel";
import { EmailDown, PhoneTelephone } from "@icon-park/react";
import React from "react";

export const AboutMePage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-start">
        <div className="flex flex-col items-center md:items-start space-y-8 w-full md:w-1/2 md:pr-12">
          <div>
            <div className="text-3xl sm:text-4xl md:text-[64px] font-[Neogrotesk-AltBold] text-center md:text-left">
              ABOUT ME
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="text-base sm:text-lg md:text-[18px] font-[BeauSans] leading-relaxed max-w-full md:max-w-[210vh] whitespace-pre-line break-words hyphens-none text-justify md:mr-30 px-2 md:px-0">
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
          <div className="flex items-center space-x-2 mt-5">
            <EmailDown theme="outline" size="24" fill="#ffffff" />
            <span>tk02052000tk@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneTelephone theme="outline" size="24" fill="#ffffff" />
            <span>+84 98 5588 048</span>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <CarouselPage />
        </div>
      </div>
    </div>
  );
};
