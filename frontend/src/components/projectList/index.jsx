import { images } from "@/hooks/mockData";
import React from "react";

export const ProjectsListPage = () => {
  return (
    <div className="w-full flex justify-center mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 ">
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Project ${index + 1}`}
            className=" rounded-lg w-[904px] h-[509px]"
          />
        ))}
      </div>
    </div>
  );
};
