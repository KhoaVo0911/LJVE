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
          <div className="flex items-center gap-8 flex-nowrap">
            <div className="shrink-0">
              <img
                src={journal.imageTitle}
                alt={journal.imageTitle}
                className="object-cover rounded-lg shadow-md w-[904px] h-[509px]"
              />
            </div>
            <div className="flex flex-col items-start ml-20">
              <div className="text-[60px] font-[Neogrotesk-AltBold] leading-relaxed mb-8 ">
                {formatTitleWithSansQuotes(journal.title)}
              </div>

              <div className="text-[18px] font-[BeauSans] leading-relaxed break-words mb-15 text-justify">
                {journal.description}
              </div>

              <a
                href="#"
                className="text-[18px] font-[BeauSans] underline text-white cursor-pointer"
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
