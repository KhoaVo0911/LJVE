import { journalData } from "@/hooks/mockData";
import React from "react";

export const JournalListPage = () => {
  const formatTitleWithSansQuotes = (title) => {
    return title.split(/(")/g).map((part, index) =>
      part === '"' ? (
        <span key={index} className="font-sans">
          "
        </span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <>
      <div className="text-[48px] font-[Neogrotesk-Bold] mb-20 tracking-[0.1em]">
        JOURNALS
      </div>

      {journalData.map((journal) => (
        <div key={journal.id} className="mb-20">
          <div className="flex flex-wrap md:flex-nowrap items-center gap-8">
            <div className="shrink-0 w-full md:w-auto">
              <img
                src={journal.imageTitle}
                alt={journal.imageTitle}
                className="object-cover rounded-lg shadow-md w-full max-w-[95vw] h-auto md:w-[904px] md:h-[509px] mb-6 md:mb-0 border border-white"
              />
            </div>
            <div className="flex flex-col items-start ml-0 md:ml-20 w-full md:w-auto">
              <div className="text-2xl sm:text-4xl md:text-[60px] font-[Neogrotesk-AltBold] leading-relaxed mb-4 md:mb-8 ">
                {formatTitleWithSansQuotes(journal.title)}
              </div>

              <div className="text-base sm:text-lg md:text-[18px] font-[BeauSans] leading-relaxed break-words mb-6 md:mb-15 text-justify">
                {journal.description}
              </div>

              <a
                href="#"
                className="text-base sm:text-lg md:text-[18px] font-[BeauSans] underline text-white cursor-pointer"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
