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
        <p className="text-[48px] font-bold text-white tracking-wide">
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

    // The phrase you want to turn into a hyperlink
    const linkText = "this is the link";

    // Use a non-capturing group for linkText to avoid duplication
    const regex = new RegExp(
      `(${[escapeRegex(linkText), ...boldWords.map(escapeRegex)].join("|")})`,
      "gi"
    );

    const parts = paragraph.split(regex);

    const elements = parts.map((part, i) => {
      if (!part) return null;

      if (part.toLowerCase() === linkText.toLowerCase()) {
        // This part is the hyperlink text
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

      // Check if part matches any bold word (case insensitive)
      if (boldWords.some((word) => word.toLowerCase() === part.toLowerCase())) {
        return (
          <strong key={`bold-${i}`} className="font-bold">
            {part}
          </strong>
        );
      }

      // Otherwise, normal text span
      return <span key={`span-${i}`}>{part}</span>;
    });

    // Handle bullet points (existing logic)
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

  const extractQuotedWordWithQuotes = (title) => {
    const match = title.match(/"([^"]+)"/);
    return match ? `"${match[1]}"` : title;
  };

  const ImageBlock = ({ src, alt, caption }) => (
    <div className="rounded-lg overflow-hidden">
      <img src={src} alt={alt} className="rounded-lg object-cover w-full" />
      <p className="text-center italic text-white mt-2">{caption}</p>
    </div>
  );

  return (
    <div key={journal.id} className="mx-20">
      <FadeInWhenVisible>
        <h1 className="text-3xl md:text-4xl font-[Neogrotesk-Bold] mb-10 tracking-[0.2em]">
          JOURNALS
        </h1>
      </FadeInWhenVisible>

      <div className="mx-20">
        <FadeInWhenVisible>
          <h2 className="text-2xl md:text-4xl font-[Neogrotesk-AltBold] mb-4">
            {formatTitleWithSansQuotes(journal.title)}
          </h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <p className="italic font-[Neogrotesk-Alt] mb-7 md:w-[45%]">
            Written by Khang Nguyen
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="w-full flex justify-start mt-10 mb-5 relative">
            <img
              src={journal.imageDetail[0]}
              alt={journal.title}
              className="w-full md:w-[75%] object-cover rounded-lg"
            />
            <div className="absolute top-1/2 right-[15vh] transform -translate-y-1/2 bg-white p-6 shadow-lg rounded-md max-w-[50vh] overflow-y-auto max-h-[70vh] whitespace-pre-line text-black text-base font-[BeauSans] leading-relaxed text-[15px] pointer-events-none">
              {journal.slogan}
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          {journal.script.map((p, idx) => renderScriptParagraph(p, idx))}
        </FadeInWhenVisible>

        <ul className="text-white font-[BeauSans] leading-relaxed">
          <div>{journal.gear[0]}</div>
          {journal.gear[1].map((g, i) => (
            <li key={i}>
              • {g.item}
              {g.subitems && (
                <ul className="pl-6">
                  {g.subitems.map((sub, j) => (
                    <li key={j}>• {sub}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <FadeInWhenVisible>
          <div className="mt-10 text-center font-bold text-2xl md:text-4xl">
            Favorite scenes in
            <br />
            {extractQuotedWordWithQuotes(journal.title)}
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="flex gap-4 mt-12 mb-12 w-full">
            {journal.startImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Middle image ${i + 1}`}
                className="w-1/3 h-auto object-cover rounded-lg"
              />
            ))}
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="flex flex-col md:flex-row justify-center gap-20 mx-auto mt-20">
            {/* Left Column */}
            <div className="flex-1 text-white font-[BeauSans] text-lg leading-relaxed break-words hyphens-none">
              <h2 className="mb-4 text-2xl font-extrabold">
                {journal.scene[0]}
              </h2>
              {renderScriptParagraph(
                journal.sceneDescription[0],
                0,
                boldWordsForSceneDescriptions[0]
              )}

              <FadeInWhenVisible>
                <div className="flex flex-col w-full max-w-full mt-10 mb-10">
                  <ImageBlock
                    src={journal.SceneImages[3]}
                    alt="Scene 2 - The set"
                  />
                  <div className="text-center italic text-white mb-5 text-lg">
                    The set
                  </div>
                  <ImageBlock
                    src={journal.SceneImages[4]}
                    alt="Scene 2 - The result"
                  />
                  <div className="text-center italic text-white text-lg">
                    The Result
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>

            {/* Right Column */}
            <div className="flex flex-col w-full md:w-[45%] max-w-full">
              <FadeInWhenVisible>
                <div className="flex flex-col w-full md:w-[100%] max-w-full mb-10">
                  <ImageBlock
                    src={journal.SceneImages[1]}
                    alt="Scene 1 - The set"
                  />
                  <div className="text-center italic text-white mb-5 text-lg">
                    The set
                  </div>
                  <ImageBlock
                    src={journal.SceneImages[2]}
                    alt="Scene 1 - The result"
                  />
                  <div className="text-center italic text-white text-lg">
                    The Result
                  </div>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible>
                <div className="text-white font-[BeauSans] text-right leading-relaxed">
                  <h2 className="mb-4 text-3xl font-extrabold break-words hyphens-none">
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
          <div className="flex gap-4 mt-12 mb-12 w-full">
            {journal.middleImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Middle image ${i + 1}`}
                className="w-1/3 h-auto object-cover rounded-lg"
              />
            ))}
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="flex flex-col md:flex-row justify-center gap-20 mx-auto mt-20">
            {/* Left Column */}
            <div className="flex-1 text-white font-[BeauSans] text-lg leading-relaxed break-words hyphens-none">
              <h2 className="mb-4 text-2xl font-extrabold">
                {journal.scene[2]}
              </h2>
              {renderScriptParagraph(
                journal.sceneDescription[2],
                2,
                boldWordsForSceneDescriptions[2]
              )}

              <FadeInWhenVisible>
                <div className="flex flex-col w-full max-w-full mt-10 mb-10">
                  <ImageBlock
                    src={journal.SceneImages[7]}
                    alt="Scene 4 - The set"
                  />
                  <div className="text-center italic text-white mb-5 text-lg">
                    The set
                  </div>
                  <ImageBlock
                    src={journal.SceneImages[8]}
                    alt="Scene 4 - The result"
                  />
                  <div className="text-center italic text-white text-lg">
                    The Result
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>

            {/* Right Column */}
            <div className="flex flex-col w-full md:w-[45%] max-w-full">
              <FadeInWhenVisible>
                <div className="flex flex-col w-full md:w-[100%] max-w-full mb-10">
                  <ImageBlock
                    src={journal.SceneImages[5]}
                    alt="Scene 3 - The set"
                  />
                  <div className="text-center italic text-white mb-5 text-lg">
                    The set
                  </div>
                  <ImageBlock
                    src={journal.SceneImages[6]}
                    alt="Scene 3 - The result"
                  />
                  <div className="text-center italic text-white text-lg">
                    The Result
                  </div>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible>
                <div className="text-white font-[BeauSans] text-right leading-relaxed break-words hyphens-none">
                  <h2 className="mb-4 text-3xl font-extrabold">
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
            <div className="text-center italic mt-12 text-[20px]">CREDIT</div>

            <div className="flex gap-4 mb-20 w-full italic text-center text-[20px] break-words hyphens-none">
              {renderScriptParagraph(
                journal.cast,
                4,
                boldWordsForSceneDescriptions[4]
              )}
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-16 mb-20 px-4">
              {journal.endImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`End Image ${index + 1}`}
                  className="w-full h-[300px] object-cover rounded-md shadow-md"
                />
              ))}
            </div>
          </FadeInWhenVisible>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};
