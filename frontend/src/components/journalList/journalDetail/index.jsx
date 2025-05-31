import React from "react";
import { useParams } from "react-router-dom";
import { journalData } from "@/hooks/mockData";
import { motion } from "framer-motion";
import { FadeInWhenVisible } from "@/components/scrollFadeIn";

export const JournalDetailsPage = () => {
  const { id } = useParams();
  const journal = journalData.find((film) => film.id === Number(id));

  if (!journal)
    return <div className="p-6 text-center">JOURNAL COMING SOON.</div>;

  const formatTitleWithSansQuotes = (title) =>
    title.split(/(")/g).map((part, idx) =>
      part === '"' ? (
        <span key={idx} className="font-sans">
          "
        </span>
      ) : (
        <span key={idx}>{part}</span>
      )
    );

  const renderScriptParagraph = (paragraph, key) => {
    const parts = paragraph.split(/(this is the link)/g);

    const elements = parts.map((part, i) => {
      if (part === "this is the link") {
        return (
          <a
            key={i}
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="italic font-extrabold"
          >
            this is the link
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });

    const hasDashBullet = paragraph
      .split("\n")
      .some((line) => line.trim().startsWith("- "));

    if (hasDashBullet) {
      const linesWithDots = paragraph
        .split("\n")
        .map((line) =>
          line.trim().startsWith("- ") ? line.replace(/^\s*-\s/, "- ") : line
        );
      return (
        <FadeInWhenVisible>
          <pre
            key={key}
            className="mb-8 text-[16px] leading-relaxed text-white font-[BeauSans]"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {linesWithDots.join("\n")}
          </pre>
        </FadeInWhenVisible>
      );
    }
    
    return (
      <FadeInWhenVisible>
        <p
          key={key}
          className="mb-8 text-[16px] leading-relaxed text-white font-[BeauSans]"
          style={{ whiteSpace: "pre-line" }}
        >
          {elements}
        </p>
      </FadeInWhenVisible>
    );
  };

  const locationImages = {
    1: "/assets/film/khong/khong1.png",
    2: "/assets/film/khong/khong2.png",
    3: "/assets/film/khong/khong5.png",
  };

  const middleImages = [
    "/assets/film/khong/khong3.png",
    "/assets/film/khong/khong3.png",
    "/assets/film/khong/khong3.png",
  ];

  const endImages = [
    "/assets/film/khong/khong4.png",
    "/assets/film/khong/khong4.png",
    "/assets/film/khong/khong4.png",
  ];

  const isLocationHeading = (text) => text.trim().startsWith("Location");

  // Build contentToRender using while loop to avoid mutating i inside for loop
  const contentToRender = [];
  let i = 1;
  while (i < journal.script.length) {
    const text = journal.script[i];
    if (isLocationHeading(text)) {
      contentToRender.push(text);
      if (i + 1 < journal.script.length)
        contentToRender.push(journal.script[i + 1]);
      const nextLocIdx = journal.script
        .slice(i + 2)
        .findIndex(isLocationHeading);
      if (nextLocIdx === -1) break;
      i = i + 2 + nextLocIdx;
    } else {
      i++;
    }
  }

  const indexFirstLocation = journal.script.findIndex(isLocationHeading);
  const introParagraphs =
    indexFirstLocation > 1 ? journal.script.slice(0, indexFirstLocation) : [];

  return (
    <div key={journal.id} className="mr-20 ml-20">
      {/* Header */}
      <FadeInWhenVisible>
        <div className="text-3xl md:text-4xl font-[Neogrotesk-Bold] mb-10 tracking-[0.2em]">
          JOURNALS
        </div>
      </FadeInWhenVisible>

      <div className="ml-20 mr-20">
        {/* Title */}
        <FadeInWhenVisible>
          <div className="text-2xl md:text-4xl font-[Neogrotesk-AltBold] mb-4">
            {formatTitleWithSansQuotes(journal.title)}
          </div>
        </FadeInWhenVisible>

        {/* Author */}
        <FadeInWhenVisible>
          <div className="italic font-[Neogrotesk-Alt] mb-7 md:w-[45%]">
            Written by Khang Nguyen
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="w-full flex justify-start mt-10 relative">
            <img
              src={journal.imageDetail[0]}
              alt={journal.title}
              className="w-full md:w-[75%] object-cover rounded-lg"
            />
            <div
              className="absolute top-1/2 right-[15vh] transform -translate-y-1/2 bg-white p-6 shadow-lg rounded-md max-w-[50vh] overflow-y-auto max-h-[70vh] whitespace-pre-line text-black text-base font-[BeauSans] leading-relaxed text-[15px]"
              style={{ pointerEvents: "none" }}
            >
              {journal.slogan}
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Intro paragraphs */}
        {introParagraphs.map((para, idx) => (
          <FadeInWhenVisible key={`intro-${idx}`}>
            {renderScriptParagraph(para, `intro-${idx}`)}
          </FadeInWhenVisible>
        ))}

        {/* Content sections for each Location */}
        {contentToRender.map((paragraph, idx) => {
          if (!isLocationHeading(paragraph)) return null;

          const match = paragraph.match(/Location (\d+)/);
          const locNumber = match ? Number(match[1]) : null;
          const nextParagraph = contentToRender[idx + 1];

          if (locNumber === 1) {
            return (
              <div key={`loc-${idx}`}>
                <FadeInWhenVisible>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-10 mx-auto">
                    <div className="flex-1 text-white font-[BeauSans] text-lg leading-relaxed">
                      <h2 className="mb-4 text-3xl font-extrabold">
                        {paragraph}
                      </h2>
                      {renderScriptParagraph(nextParagraph, `content-${idx}`)}
                    </div>
                    <img
                      src={locationImages[1]}
                      alt="Location 1"
                      className="rounded-lg object-cover w-full md:w-[60%]"
                    />
                  </div>
                </FadeInWhenVisible>

                <FadeInWhenVisible>
                  <div className="flex gap-4 mt-12 mb-12 w-full">
                    {middleImages.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Middle image ${i + 1}`}
                        className="w-1/3 h-auto object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </FadeInWhenVisible>
              </div>
            );
          }

          if (locNumber === 2) {
            return (
              <FadeInWhenVisible key={`loc-${idx}`}>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 mx-auto">
                  <img
                    src={locationImages[2]}
                    alt="Location 2"
                    className="rounded-lg object-cover w-full md:w-[50%]"
                  />
                  <div className="flex-1 text-white font-[BeauSans] leading-relaxed text-right">
                    <h2 className="mb-4 text-3xl font-extrabold">
                      {paragraph}
                    </h2>
                    {renderScriptParagraph(nextParagraph, `content-${idx}`)}
                  </div>
                </div>
              </FadeInWhenVisible>
            );
          }

          if (locNumber === 3) {
            return (
              <FadeInWhenVisible key={`loc-${idx}`}>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 mx-auto">
                  <div className="flex-1 text-white font-[BeauSans] text-lg leading-relaxed">
                    <h2 className="mb-4 text-3xl font-extrabold">
                      {paragraph}
                    </h2>
                    {renderScriptParagraph(nextParagraph, `content-${idx}`)}
                  </div>
                  <img
                    src={locationImages[3]}
                    alt="Location 3"
                    className="rounded-lg object-cover w-full md:w-[40%]"
                  />
                </div>
              </FadeInWhenVisible>
            );
          }

          return null;
        })}

        <FadeInWhenVisible>
          <div className="flex gap-4 mt-12 mb-12 w-full">
            {endImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`End image ${i + 1}`}
                className="w-1/3 h-auto object-cover rounded-lg"
              />
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};
