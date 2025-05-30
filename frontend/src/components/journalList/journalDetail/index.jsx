import { journalData } from "@/hooks/mockData";
import React from "react";
import { useParams } from "react-router-dom";

export const JournalDetailsPage = () => {
  const { id } = useParams();
  const journal = journalData.find((film) => film.id === Number(id));

  if (!journal)
    return <div className="p-6 text-center">JOURNAL COMING SOON.</div>;

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
    <div key={journal.id} className="mr-20 ml-20">
      <div className="text-3xl md:text-4xl font-[Neogrotesk-Bold] mb-10 tracking-[0.2em]">
        JOURNALS
      </div>

      <div className="ml-20 mr-20">
        <div className="text-2xl md:text-4xl font-[Neogrotesk-AltBold] mb-4">
          {formatTitleWithSansQuotes(journal.title)}
        </div>
        <div className="flex flex-col justify-start text-left md:w-[45%] font-[Neogrotesk-Alt] mb-7">
          <div className="italic">Written by Khang Nguyen</div>
        </div>

        <div className="w-full flex justify-start mt-10">
          <div className="relative">
            <img
              src={journal.imageDetail[0]}
              alt={journal.title}
              className="w-full md:w-[85%] object-cover"
            />

            <div className="absolute top-1/2 right-[5vh] transform -translate-y-1/2 bg-white p-6 shadow-lg rounded-md max-w-[50vh] h-[40vh] overflow-y-auto">
              <div className="text-gray-800 text-base font-[BeauSans] leading-relaxed">
                {journal.description}
              </div>
            </div>
          </div>
        </div>

        <div className="text-base font-[BeauSans] leading-relaxed mt-10">
          {journal.description}
          {journal.description}
          {journal.description}
          {journal.description}
          {journal.description}
          {journal.description}
        </div>
      </div>
    </div>
  );
};
