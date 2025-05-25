import React from "react";
import { useParams } from "react-router-dom";
import { filmDetails } from "../../hooks/mockData";
import { AspectRatio } from "../ui/aspect-ratio";

const specialItalicLabels = ["Gaffer", "SFX", "Editor", "Colorist"];

const FilmDetails = () => {
  const { slug } = useParams();
  const film = filmDetails.find((f) => f.slug === slug);

  if (!film)
    return (
      <div className="text-white p-10 font-[beauSans]">
        Không tìm thấy phim!
      </div>
    );

  const titleSection = film.credit.find((section) =>
    section.items.some((item) => item.label === "Title")
  );
  const titleItem = titleSection
    ? titleSection.items.find((item) => item.label === "Title")
    : null;
  const filmTitle = titleItem ? titleItem.names[0] : "";

  return (
    <div className="bg-black min-h-screen w-full font-[beauSans] pt-24 pb-12 px-2 sm:px-4">
      <div className="max-w-[1600px] mx-auto flex flex-col md:grid md:grid-cols-[minmax(0,380px)_940px] gap-8 md:gap-16 items-start">
        <div className="w-full md:pt-4 md:pr-8 md:max-w-none">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 tracking-normal text-white">
            {film.name}
          </h1>
          <div className="text-white text-lg sm:text-xl font-[beauSans] mb-1">
            {filmTitle}
          </div>
          <div className="text-white text-base font-light mb-4">-</div>
          <div className="space-y-4">
            {film.credit.map((section, idx) => (
              <div key={idx} className="mb-2">
                <div className="text-white text-lg sm:text-xl mt-6 mb-1 font-[beauSans]">
                  {section.section}
                </div>
                <div>
                  {section.items.map((item, i) =>
                    item.label === "Title" ? null : (
                      <div key={i} className="mb-1">
                        {item.label ? (
                          <div className="text-white text-base sm:text-lg font-[beauSans]">
                            {item.label}
                            {item.names.length > 0 && (
                              <>
                                {": "}
                                <span
                                  className={
                                    item.italic
                                      ? "italic font-light"
                                      : "font-light"
                                  }
                                >
                                  {item.names.join(", ")}
                                </span>
                              </>
                            )}
                          </div>
                        ) : (
                          <div
                            className={
                              item.italic
                                ? "italic text-white text-base sm:text-lg "
                                : "text-white text-base sm:text-lg "
                            }
                          >
                            {item.names.join(", ")}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[940px] mx-auto md:mx-0">
          <div className="mb-10 sm:mb-16 w-full">
            <AspectRatio ratio={16 / 9}>
              <video
                src={film.video}
                controls
                className="w-full h-full object-cover bg-black m-0 p-0 rounded-none border-0"
              />
            </AspectRatio>
          </div>
          {film.images.map((img, idx) => (
            <div key={idx} className="mb-10 sm:mb-16 w-full">
              <img
                src={img}
                alt={`film-${film.name}-img${idx + 1}`}
                className="w-full m-0 p-0 rounded-none border-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;
