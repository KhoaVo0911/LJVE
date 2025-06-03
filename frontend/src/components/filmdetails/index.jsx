import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { journalDetails } from "../../hooks/mockData";
import { AspectRatio } from "../ui/aspect-ratio";

const specialItalicLabels = ["Gaffer", "SFX", "Editor", "Colorist"];

const FilmDetails = () => {
  const { slug } = useParams();
  const film = journalDetails.find((f) => f.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!film)
    return <div className="text-white p-10 font-[beauSans]">COMING SOON!</div>;

  const titleSection = film.credit.find((section) =>
    section.items.some((item) => item.label === "Title")
  );
  const titleItem = titleSection
    ? titleSection.items.find((item) => item.label === "Title")
    : null;
  const filmTitle = titleItem ? titleItem.names[0] : "";

  return (
    <div className="bg-black min-h-screen w-full font-[beauSans] pt-20 pb-12 px-2 sm:px-4">
      <div className="w-full grid grid-cols-1 md:grid-cols-[minmax(0,220px)_1fr_minmax(0,220px)] gap-8 px-0 md:px-8">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-2 tracking-normal text-white">
            {film.name}
          </h1>
          {film.information?.categoryTitle && (
            <div className="text-white text-lg sm:text-xl font-[beauSans] mb-1">
              {film.information.categoryTitle}
            </div>
          )}
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
                  {section.items &&
                    section.items.map((item, i) =>
                      item.label ? (
                        <div
                          key={i}
                          className="text-white text-base sm:text-lg font-[beauSans]"
                        >
                          <span className="font-semibold">{item.label}</span>
                          {item.names &&
                            item.names.length > 0 &&
                            (item.names.length === 0 ? (
                              <>
                                {": "}
                                <span
                                  className={
                                    item.italic
                                      ? "italic font-light"
                                      : "font-light"
                                  }
                                >
                                  {item.names[0]}
                                </span>
                              </>
                            ) : (
                              <>
                                {": "}
                                <br />
                                {item.names.map((n, idx2) => (
                                  <div
                                    key={idx2}
                                    className={
                                      n === "Khang Nguyen (Ljve)"
                                        ? "font-bold italic text-white text-base sm:text-lg font-[beauSans]"
                                        : item.italic
                                        ? "italic font-light text-white text-base sm:text-lg font-[beauSans]"
                                        : "font-light text-white text-base sm:text-lg font-[beauSans]"
                                    }
                                  >
                                    {n}
                                  </div>
                                ))}
                              </>
                            ))}
                        </div>
                      ) : (
                        <div
                          key={i}
                          className={
                            (item.bold ? "font-bold " : "") +
                            (item.italic ? "italic " : "") +
                            "text-white text-base sm:text-lg font-light"
                          }
                        >
                          {item.names ? item.names.join(", ") : null}
                        </div>
                      )
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center w-full max-w-[600px] mx-auto justify-self-center">
          <div className="mb-10 sm:mb-16 w-full">
            <AspectRatio ratio={16 / 9}>
              <iframe
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
        {/* Information - Right */}
        {film.information && (
          <div className="flex flex-col items-end text-white font-[beauSans] min-w-[180px] md:max-w-[220px] ml-0 pt-4 self-stretch justify-self-end">
            <div
              className="text-4xl font-bold mb-8 text-right"
              style={{ fontSize: "2.6rem", letterSpacing: "-0.03em" }}
            >
              Information
            </div>
            <div className="mb-6 w-full flex flex-col items-end gap-8">
              <div
                className="flex flex-col items-end w-full border-r-2 border-white pr-2"
                style={{ width: "fit-content", alignSelf: "flex-end" }}
              >
                <div
                  className="text-xs uppercase tracking-widest text-gray-400 mb-1 text-right"
                  style={{ fontSize: "0.92rem" }}
                >
                  CLIENT
                </div>
                <div
                  className="text-base font-normal text-right"
                  style={{ fontSize: "1.18rem", lineHeight: "1.3" }}
                >
                  {film.information.client}
                </div>
              </div>
              <div
                className="flex flex-col items-end w-full border-r-2 border-white pr-2"
                style={{ width: "fit-content", alignSelf: "flex-end" }}
              >
                <div
                  className="text-xs uppercase tracking-widest text-gray-400 mb-1 text-right"
                  style={{ fontSize: "0.92rem" }}
                >
                  YEAR
                </div>
                <div
                  className="text-base font-normal text-right"
                  style={{ fontSize: "1.18rem", lineHeight: "1.3" }}
                >
                  {film.information.year}
                </div>
              </div>
              <div
                className="flex flex-col items-end w-full border-r-2 border-white pr-2"
                style={{ width: "fit-content", alignSelf: "flex-end" }}
              >
                <div
                  className="text-xs uppercase tracking-widest text-gray-400 mb-1 text-right"
                  style={{ fontSize: "0.92rem" }}
                >
                  SERVICES
                </div>
                <div
                  className="text-base font-normal text-right"
                  style={{ fontSize: "1.18rem", lineHeight: "1.3" }}
                >
                  {Array.isArray(film.information.services)
                    ? film.information.services.map((s, idx) => (
                        <div key={idx}>{s}</div>
                      ))
                    : film.information.services}
                </div>
              </div>
              <div
                className="flex flex-col items-end w-full border-r-2 border-white pr-2"
                style={{ width: "fit-content", alignSelf: "flex-end" }}
              >
                <div
                  className="text-xs uppercase tracking-widest text-gray-400 mb-1 text-right"
                  style={{ fontSize: "0.92rem" }}
                >
                  CATEGORY
                </div>
                <div
                  className="text-base font-normal text-right"
                  style={{ fontSize: "1.18rem", lineHeight: "1.3" }}
                >
                  {film.information.category}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Mobile Information Section */}
      {film.information && (
        <div className="block md:hidden w-full mt-8">
          <div className="text-2xl font-bold mb-2 text-center">Information</div>
          <div className="w-12 h-1 bg-white mx-auto mb-4 rounded-full" />
          <div
            className="flex flex-col items-center text-white font-[beauSans] text-base"
            style={{ fontSize: "1.05rem" }}
          >
            <div className="mb-2 text-center">
              <div className="text-xs uppercase tracking-widest text-gray-400">
                Client
              </div>
              <div className="font-semibold">{film.information.client}</div>
            </div>
            <div className="mb-2 text-center">
              <div className="text-xs uppercase tracking-widest text-gray-400">
                Year
              </div>
              <div className="font-semibold">{film.information.year}</div>
            </div>
            <div className="mb-2 text-center">
              <div className="text-xs uppercase tracking-widest text-gray-400">
                Services
              </div>
              <div className="font-semibold">
                {Array.isArray(film.information.services)
                  ? film.information.services.join(", ")
                  : film.information.services}
              </div>
            </div>
            <div className="mb-2 text-center">
              <div className="text-xs uppercase tracking-widest text-gray-400">
                Category
              </div>
              <div className="font-semibold">{film.information.category}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilmDetails;
