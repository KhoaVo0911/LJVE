// import React from "react";
// import { useParams } from "react-router-dom";
// import { filmDetails } from "../../hooks/mockData";
// // import { Card, CardContent } from "../ui/card";
// import { AspectRatio } from "../ui/aspect-ratio";

// const FilmDetails = () => {
//   const { id } = useParams();
//   const film = filmDetails.find((f) => String(f.id) === String(id));

//   if (!film)
//     return (
//       <div className="text-white p-10 font-[beauSans]">
//         Không tìm thấy phim!
//       </div>
//     );

//   return (
//     <div className="bg-black min-h-screen w-full font-[beauSans]">
//       <div className="max-w-[1600px] mx-auto flex flex-row gap-16 pt-16 pb-24 px-4">
//         {/* Left: Credit */}
//         <div className="flex-shrink-0 w-full max-w-md pt-4">
//           <h1 className="text-5xl font-bold mb-8 tracking-wider text-white">
//             {film.name}
//           </h1>
//           <div className="text-base leading-relaxed text-left font-light space-y-1 text-white">
//             {film.credit.map((line, idx) => (
//               <div key={idx}>{line}</div>
//             ))}
//           </div>
//         </div>
//         {/* <div className="flex-1 pt-4 max-w-3xl flex flex-col items-center">
//           <Card className="bg-black shadow-none border-none rounded-none mb-10 flex items-center justify-center">
//             <CardContent className="p-0 flex items-center justify-center">
//               <div className="max-w-[940px] w-full h-[531px] flex items-center justify-center">
//                 <AspectRatio ratio={940 / 531} className="w-full h-full">
//                   <video
//                     src={film.video}
//                     controls
//                     className="w-full h-full object-cover bg-black m-0 p-0 rounded-none border-none"
//                   />
//                 </AspectRatio>
//               </div>
//             </CardContent>
//           </Card>

//           {film.images.map((img, idx) => (
//             <Card
//               key={idx}
//               className="bg-black shadow-none border-none rounded-none mb-10"
//             >
//               <CardContent className="p-0">
//                 <img
//                   src={img}
//                   alt={`film-${film.name}-img${idx + 1}`}
//                   className="w-full m-0 p-0 rounded-none border-none"
//                 />
//               </CardContent>
//             </Card>
//           ))}
//         </div> */}
//         <div className="flex-1 pt-4 max-w-3xl flex flex-col items-center">
//           <div className="w-[940px] mx-auto mb-10">
//             <AspectRatio ratio={940 / 531}>
//               <video
//                 src={film.video}
//                 controls
//                 className="w-full h-full object-cover bg-black m-0 p-0 rounded-none border-none"
//               />
//             </AspectRatio>
//           </div>
//           {film.images.map((img, idx) => (
//             <div key={idx} className="w-[940px] mx-auto mb-10">
//               <img
//                 src={img}
//                 alt={`film-${film.name}-img${idx + 1}`}
//                 className="w-full m-0 p-0 rounded-none border-none"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilmDetails;
// import React from "react";
// import { useParams } from "react-router-dom";
// import { filmDetails } from "../../hooks/mockData";
// import { AspectRatio } from "../ui/aspect-ratio";

// const FilmDetails = () => {
//   const { id } = useParams();
//   const film = filmDetails.find((f) => String(f.id) === String(id));

//   if (!film)
//     return (
//       <div className="text-white p-10 font-[beauSans]">
//         Không tìm thấy phim!
//       </div>
//     );

//   return (
//     <div className="bg-black min-h-screen w-full font-[beauSans]">
//       <div className="max-w-[1600px] mx-auto grid grid-cols-[minmax(0,380px)_940px] gap-16 pt-16 pb-24 px-4 items-start">
//         <div className="pt-4 pr-8">
//           <h1 className="text-5xl font-bold mb-8 tracking-wider text-white">
//             {film.name}
//           </h1>
//           <div className="text-base leading-relaxed text-left font-light space-y-2 text-white">
//             {film.credit.map((line, idx) => (
//               <div key={idx}>{line}</div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <div className="w-[940px] mb-10">
//             <AspectRatio ratio={940 / 531}>
//               <video
//                 src={film.video}
//                 controls
//                 className="w-full h-full object-cover bg-black m-0 p-0 rounded-none border-none"
//               />
//             </AspectRatio>
//           </div>
//           {film.images.map((img, idx) => (
//             <div key={idx} className="w-[940px] mb-10">
//               <img
//                 src={img}
//                 alt={`film-${film.name}-img${idx + 1}`}
//                 className="w-full m-0 p-0 rounded-none border-none"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilmDetails;

import React from "react";
import { useParams } from "react-router-dom";
import { filmDetails } from "../../hooks/mockData";
import { AspectRatio } from "../ui/aspect-ratio";

const specialItalicLabels = ["Gaffer", "SFX", "Editor", "Colorist"];

const FilmDetails = () => {
  const { id } = useParams();
  const film = filmDetails.find((f) => String(f.id) === String(id));

  if (!film)
    return (
      <div className="text-white p-10 font-[beauSans]">
        Không tìm thấy phim!
      </div>
    );

  // Tìm dòng Title trong credit
  const titleSection = film.credit.find((section) =>
    section.items.some((item) => item.label === "Title")
  );
  const titleItem = titleSection
    ? titleSection.items.find((item) => item.label === "Title")
    : null;
  const filmTitle = titleItem ? titleItem.names[0] : "";

  return (
    <div className="bg-black min-h-screen w-full font-[beauSans] relative pt-40 pb-24 px-4">
      <div className="absolute left-5 top-18 w-[480px] pl-8 z-10 pt-30">
        <h1 className="text-5xl font-bold mb-2 tracking-normal text-white">
          {film.name}
        </h1>
        <br />
        <div className="text-white text-xl font-[beauSans] mb-1">
          {filmTitle}
        </div>
        <div className="text-white text-lg font-light mb-4">-</div>
        <div className="space-y-4">
          {film.credit.map((section, idx) => (
            <div key={idx} className="mb-2">
              <div className="text-white text-[20px] mt-6 mb-1 font-[beauSans]">
                {section.section}
              </div>
              <div>
                {section.items.map((item, i) =>
                  item.label === "Title" ? null : (
                    <div key={i} className="mb-1">
                      {item.label ? (
                        <div className="text-white text-[20px] font-[beauSans]">
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
                              ? "italic text-white text-[20px] "
                              : "text-white text-[20px] "
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
      <div
        className="mx-auto"
        style={{ width: 940, marginLeft: "auto", marginRight: "auto" }}
      >
        <div className="mb-16">
          <AspectRatio ratio={940 / 529}>
            <video
              src={film.video}
              controls
              className="w-full h-full object-cover bg-black m-5 p-0 rounded-none border-0"
            />
          </AspectRatio>
        </div>
        {film.images.map((img, idx) => (
          <div key={idx} className="mb-16">
            <img
              src={img}
              alt={`film-${film.name}-img${idx + 1}`}
              className="w-full m-5 p-0 rounded-none border-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmDetails;
