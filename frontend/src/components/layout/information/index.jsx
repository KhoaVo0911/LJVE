import { Button } from "@/components/ui/button";
import React from "react";

export const InformationIcon = () => {
  const iconHeight = 42;
  const iconWidth = 42;

  return (
    <>
      <a href="https://www.instagram.com/_.mr.ljve._/">
        <img
          src="https://img.icons8.com/ios/500/FFFFFF/instagram-new--v1.png"
          alt="Instagram"
          width={iconHeight}
          height={iconWidth}
        />
      </a>
      <a href="https://www.youtube.com/@KhangNguyenOrmine">
        <img
          src="https://img.icons8.com/ios-glyphs/480/FFFFFF/youtube-play.png"
          alt="youtube-play"
          width={iconHeight}
          height={iconWidth}
        />
      </a>
      <a href="https://vimeo.com/user221983360">
        <img
          src="https://img.icons8.com/?size=100&id=9XPmX8KXgqvf&format=png&color=FFFFFF"
          width={iconHeight + 5}
          height={iconWidth + 5}
        />
      </a>
      <a href="https://www.facebook.com/khang.nguyentuan.54/">
        <img
          src="https://img.icons8.com/ios-glyphs/480/FFFFFF/facebook-new.png"
          width={iconHeight}
          height={iconWidth}
        />
      </a>
    </>
  );
};
