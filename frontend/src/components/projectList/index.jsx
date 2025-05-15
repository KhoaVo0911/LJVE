import React from "react";

export const ProjectsListPage = ({ images }) => {
  return (
    <>
      {images && images.length > 0 ? (
        <div className="w-full flex justify-center mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
            {images.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Project ${index + 1}`}
                className="rounded-lg w-[904px] h-[509px]"
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen text-center text-[48px] font-[Neogrotesk-Bold] px-[30vh] tracking-[0.3em] mt-[40vh] mb-[20vh]">
          FUTURE WORKS ARE ON PROCESS YOU COULD MAKE IT HAPPEN CONTACT ME
        </div>
      )}
    </>
  );
};
