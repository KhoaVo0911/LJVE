import { Button } from "@/components/ui/button";
import React from "react";

export const InformationIcon = () => {
  const iconHeight = 50;
  const iconWidth = 50;

  return (
    <>
      <a href="https://www.instagram.com/_.mr.ljve._/">
        <img
          src="assets/icons8-instagram-500.png"
          alt="Instagram"
          width={iconHeight}
          height={iconWidth}
        />
      </a>
      <a href="https://www.youtube.com/@KhangNguyenOrmine">
        <img
          src="assets/icons8-youtube-384.png"
          alt="youtube-play"
          width={iconHeight}
          height={iconWidth}
        />
      </a>
      <a href="https://vimeo.com/user221983360">
        <img
          src="https://img.icons8.com/?size=100&id=9XPmX8KXgqvf&format=png&color=FFFFFF"
          width={iconHeight}
          height={iconWidth}
        />
      </a>
      <a href="https://www.facebook.com/khang.nguyentuan.54/">
        <img
          src="assets/icons8-facebook-500.png"
          width={iconHeight}
          height={iconWidth}
        />
      </a>
    </>
  );
};
