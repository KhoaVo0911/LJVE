import React from "react";
import { useParams } from "react-router-dom";
import { journalData } from "@/hooks/mockData";
import { FadeInWhenVisible } from "@/components/scrollFadeIn";

export const JournalDetailsPage = () => {
  const { id } = useParams();
  const journal = journalData.find((film) => film.id === Number(id));

  const boldWordsForSceneDescriptions = [
    ["Challenge", "Solution"],
    ["Challenge", "Solution"],
    ["Diffusion", "Key Light", "Fill Light", "Hair Light", "Bonus"],
    ["Nanlite T4C", "Aputure 300C", "Light wrap effects"],
    [
      "Ngân Ngân",
      "Dewild (Ormine)",
      "Turtle (Ormine)",
      "Jessie (Ormine)",
      "Khang Nguyen (Ljve)",
      "Bern (Ormine)",
      "Bao Han (Ormine)",
      "Ljve Nguyen (Ormine)",
      "Logghito",
      "Trần Lâm",
      "Tấn Đạt",
    ],
  ];

  if (!journal || !Array.isArray(journal.script)) {
    return (
      <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black bg-opacity-50 pointer-events-none">
        <p className="text-[32px] sm:text-[36px] md:text-[48px] font-bold text-white tracking-wide">
          COMING SOON
        </p>
      </div>
    );
  }

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

  const renderScriptParagraph = (paragraph, key, boldWords = []) => {
    const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const linkText = "this is the link";
    const regex = new RegExp(
      `(${[escapeRegex(linkText), ...boldWords.map(escapeRegex)].join("|")})`,
      "gi"
    );
    const parts = paragraph.split(regex);
    const elements = parts.map((part, i) => {
      if (!part) return null;
      if (part.toLowerCase() === linkText.toLowerCase()) {
        return (
          <a
            key={`link-${i}`}
            href={journal.video}
            target="_blank"
            rel="noopener noreferrer"
            className="italic font-extrabold"
          >
            {part}
          </a>
        );
      }
      if (boldWords.some((word) => word.toLowerCase() === part.toLowerCase())) {
        return (
          <strong key={`bold-${i}`} className="font-bold">
            {part}
          </strong>
        );
      }
      return <span key={`span-${i}`}>{part}</span>;
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
        <FadeInWhenVisible key={key}>
          <pre
            className="mb-6 sm:mb-8 text-[15px] sm:text-[16px] leading-relaxed text-white font-[BeauSans] px-3 sm:px-0"
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
          className="mb-6 sm:mb-8 text-[15px] sm:text-[16px] leading-relaxed text-white font-[BeauSans] px-3 sm:px-0"
          style={{ whiteSpace: "pre-line" }}
        >
          {elements}
        </p>
      </FadeInWhenVisible>
    );
  };

  const extractQuotedWordWithQuotes = (title) => {
    const match = title.match(/"([^"]+)"/);
    return match ? `"${match[1]}"` : title;
  };

  const ImageBlock = ({ src, alt, caption }) => (
    <div className="rounded-2xl overflow-hidden mb-4 sm:mb-0 shadow-md transition-all duration-200">
      <img src={src} alt={alt} className="rounded-2xl object-cover w-full" />
      <p className="text-center italic text-white mt-2 text-sm sm:text-base">
        {caption}
      </p>
    </div>
  );

  return (
    <div key={journal.id} className="px-2 sm:px-4 md:mx-10 lg:mx-20">
      <FadeInWhenVisible>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-[Neogrotesk-Bold] mb-6 sm:mb-10 tracking-[0.2em]">
          JOURNALS
        </h1>
      </FadeInWhenVisible>

      <div className="px-1 sm:px-2 md:px-10 lg:px-20">
        <FadeInWhenVisible>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-[Neogrotesk-AltBold] mb-2 sm:mb-4">
            {formatTitleWithSansQuotes(journal.title)}
          </h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <p className="italic font-[Neogrotesk-Alt] mb-4 sm:mb-7 md:w-[45%] text-sm sm:text-base">
            Written by Khang Nguyen
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="w-full flex flex-col md:flex-row justify-start mt-8 sm:mt-10 mb-6 sm:mb-5 relative gap-4 md:gap-0">
            <img
              src={journal.imageDetail[0]}
              alt={journal.title}
              className="w-full md:w-[75%] object-cover rounded-2xl shadow-md mb-3 sm:mb-0 transition-all duration-200"
            />
            <div className="block md:hidden w-full text-center bg-white bg-opacity-60 p-4 mt-0 rounded-2xl text-black text-base font-semibold shadow-md transition-all duration-200">
              {journal.slogan}
            </div>
            <div className="hidden md:block absolute top-1/2 right-2 sm:right-[15vh] transform -translate-y-1/2 bg-white p-3 sm:p-6 shadow-lg rounded-md max-w-[90vw] sm:max-w-[50vh] overflow-y-auto max-h-[70vh] whitespace-pre-line text-black text-sm sm:text-base font-[BeauSans] leading-relaxed pointer-events-none">
              {journal.slogan}
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          {journal.script.map((p, idx) => renderScriptParagraph(p, idx))}
        </FadeInWhenVisible>

        <ul className="text-white font-[BeauSans] leading-relaxed text-base sm:text-base pl-4 sm:pl-0 mb-8 sm:mb-0">
          <div className="mb-2 sm:mb-0">{journal.gear[0]}</div>
          {journal.gear[1].map((g, i) => (
            <li key={i} className="mb-1 sm:mb-0">
              • {g.item}
              {g.subitems && (
                <ul className="pl-4 sm:pl-6">
                  {g.subitems.map((sub, j) => (
                    <li key={j} className="mb-1 sm:mb-0">
                      • {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <FadeInWhenVisible>
          <div className="mt-8 sm:mt-10 text-center font-bold text-xl sm:text-2xl md:text-4xl">
            Favorite scenes in
            <br />
            {extractQuotedWordWithQuotes(journal.title)}
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="flex gap-3 sm:gap-4 mt-10 sm:mt-12 mb-10 sm:mb-12 w-full flex-col sm:flex-row">
            {journal.startImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Middle image ${i + 1}`}
                className="w-full sm:w-1/3 h-auto object-cover rounded-2xl shadow-md mb-3 sm:mb-0 transition-all duration-200"
              />
            ))}
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20 mx-auto mt-10 sm:mt-20">
            {/* Left Column */}
            <div className="flex-1 text-white font-[BeauSans] text-base sm:text-lg leading-relaxed break-words hyphens-none">
              <h2 className="mb-2 sm:mb-4 text-xl sm:text-2xl font-extrabold">
                {journal.scene[0]}
              </h2>
              {renderScriptParagraph(
                journal.sceneDescription[0],
                0,
                boldWordsForSceneDescriptions[0]
              )}

              <FadeInWhenVisible>
                <div className="flex flex-col w-full max-w-full mt-6 sm:mt-10 mb-6 sm:mb-10">
                  <ImageBlock
                    src={journal.SceneImages[3]}
                    alt="Scene 2 - The set"
                  />
                  <div className="text-center italic text-white mb-2 sm:mb-5 text-base sm:text-lg">
                    The set
                  </div>
                  <ImageBlock
                    src={journal.SceneImages[4]}
                    alt="Scene 2 - The result"
                  />
                  <div className="text-center italic text-white text-base sm:text-lg">
                    The Result
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>

            {/* Right Column */}
            <div className="flex flex-col w-full md:w-[45%] max-w-full">
              <FadeInWhenVisible>
                <div className="flex flex-col w-full md:w-[100%] max-w-full mb-6 sm:mb-10">
                  <ImageBlock
                    src={journal.SceneImages[1]}
                    alt="Scene 1 - The set"
                  />
                  <div className="text-center italic text-white mb-2 sm:mb-5 text-base sm:text-lg">
                    The set
                  </div>
                  <ImageBlock
                    src={journal.SceneImages[2]}
                    alt="Scene 1 - The result"
                  />
                  <div className="text-center italic text-white text-base sm:text-lg">
                    The Result
                  </div>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible>
                <div className="text-white font-[BeauSans] text-right leading-relaxed">
                  <h2 className="mb-2 sm:mb-4 text-2xl sm:text-3xl font-extrabold break-words hyphens-none">
                    {journal.scene[1]}
                  </h2>
                  {renderScriptParagraph(
                    journal.sceneDescription[1],
                    1,
                    boldWordsForSceneDescriptions[1]
                  )}
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="flex gap-3 sm:gap-4 mt-10 sm:mt-12 mb-10 sm:mb-12 w-full flex-col sm:flex-row">
            {journal.middleImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Middle image ${i + 1}`}
                className="w-full sm:w-1/3 h-auto object-cover rounded-2xl shadow-md mb-3 sm:mb-0 transition-all duration-200"
              />
            ))}
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20 mx-auto mt-10 sm:mt-20">
            {/* Left Column */}
            <div className="flex-1 text-white font-[BeauSans] text-base sm:text-lg leading-relaxed break-words hyphens-none">
              <h2 className="mb-2 sm:mb-4 text-xl sm:text-2xl font-extrabold">
                {journal.scene[2]}
              </h2>
              {renderScriptParagraph(
                journal.sceneDescription[2],
                2,
                boldWordsForSceneDescriptions[2]
              )}

              <FadeInWhenVisible>
                <div className="flex flex-col w-full max-w-full mt-6 sm:mt-10 mb-6 sm:mb-10">
                  <ImageBlock
                    src={journal.SceneImages[7]}
                    alt="Scene 4 - The set"
                  />
                  <div className="text-center italic text-white mb-2 sm:mb-5 text-base sm:text-lg">
                    The set
                  </div>
                  <ImageBlock
                    src={journal.SceneImages[8]}
                    alt="Scene 4 - The result"
                  />
                  <div className="text-center italic text-white text-base sm:text-lg">
                    The Result
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>

            {/* Right Column */}
            <div className="flex flex-col w-full md:w-[45%] max-w-full">
              <FadeInWhenVisible>
                <div className="flex flex-col w-full md:w-[100%] max-w-full mb-6 sm:mb-10">
                  <ImageBlock
                    src={journal.SceneImages[5]}
                    alt="Scene 3 - The set"
                  />
                  <div className="text-center italic text-white mb-2 sm:mb-5 text-base sm:text-lg">
                    The set
                  </div>
                  <ImageBlock
                    src={journal.SceneImages[6]}
                    alt="Scene 3 - The result"
                  />
                  <div className="text-center italic text-white text-base sm:text-lg">
                    The Result
                  </div>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible>
                <div className="text-white font-[BeauSans] text-right leading-relaxed break-words hyphens-none">
                  <h2 className="mb-2 sm:mb-4 text-2xl sm:text-3xl font-extrabold">
                    {journal.scene[3]}
                  </h2>
                  {renderScriptParagraph(
                    journal.sceneDescription[3],
                    3,
                    boldWordsForSceneDescriptions[3]
                  )}
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
          <FadeInWhenVisible>
            <div className="text-center italic mt-8 sm:mt-12 text-base sm:text-[20px]">
              CREDIT
            </div>

            <div className="flex gap-2 sm:gap-4 mb-10 sm:mb-20 w-full italic text-center text-base sm:text-[20px] break-words hyphens-none">
              {renderScriptParagraph(
                journal.cast,
                4,
                boldWordsForSceneDescriptions[4]
              )}
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mt-10 sm:mt-16 mb-10 sm:mb-20 px-0 sm:px-4">
              {journal.endImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`End Image ${index + 1}`}
                  className="w-full h-[180px] sm:h-[220px] md:h-[300px] object-cover rounded-2xl shadow-md mb-3 sm:mb-0 transition-all duration-200"
                />
              ))}
            </div>
          </FadeInWhenVisible>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};
