import React from "react";

export const InformationIcon = ({ direction = "row", gap = "gap-7" }) => {
  const iconHeight = 30;
  const iconWidth = 30;

  // Tailwind only works with static class names, so we must use a conditional
  const flexDirectionClass = direction === "row" ? "flex-row" : direction;

  return (
    <div className={`flex ${flexDirectionClass} ${gap} items-center`}>
      <a
        href="https://www.instagram.com/_.mr.ljve._/"
        className="hover:opacity-80 transition-opacity"
      >
        <img
          src="https://img.icons8.com/ios/500/FFFFFF/instagram-new--v1.png"
          alt="Instagram"
          width={iconHeight}
          height={iconWidth}
        />
      </a>
      <a
        href="https://www.youtube.com/@KhangNguyenOrmine"
        className="hover:opacity-80 transition-opacity"
      >
        <img
          src="https://img.icons8.com/ios-glyphs/480/FFFFFF/youtube-play.png"
          alt="youtube-play"
          width={iconHeight}
          height={iconWidth}
        />
      </a>
      <a
        href="https://vimeo.com/user221983360"
        className="hover:opacity-80 transition-opacity"
      >
        <img
          src="https://img.icons8.com/?size=100&id=9XPmX8KXgqvf&format=png&color=FFFFFF"
          width={iconHeight + 5}
          height={iconWidth + 5}
        />
      </a>
      <a
        href="https://www.facebook.com/khang.nguyentuan.54/"
        className="hover:opacity-80 transition-opacity"
      >
        <img
          src="https://img.icons8.com/ios-glyphs/480/FFFFFF/facebook-new.png"
          width={iconHeight}
          height={iconWidth}
        />
      </a>
    </div>
  );
};
