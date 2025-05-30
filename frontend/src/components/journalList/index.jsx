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
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-[1400px]">
        <div className="text-3xl md:text-4xl font-[Neogrotesk-Bold] mb-20 tracking-[0.2em]">
          JOURNALS
        </div>

        {journalData.map((journal) => (
          <div
            key={journal.id}
            className="flex flex-wrap md:flex-nowrap gap-8 mb-20"
          >
            <img
              src={journal.imageTitle}
              alt={journal.imageTitle}
              className="object-cover rounded-lg shadow-md w-full md:w-[55%] max-w-full border border-white"
            />

            <div className="flex flex-col justify-start text-left md:w-[45%]">
              <h2 className="text-2xl md:text-4xl font-[Neogrotesk-AltBold] mb-4">
                {formatTitleWithSansQuotes(journal.title)}
              </h2>
              <p className="text-base md:text-lg font-[BeauSans] mb-4 leading-relaxed">
                {journal.description}
              </p>
              <a
                href="#"
                className="text-base md:text-lg font-[BeauSans] underline text-white"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
