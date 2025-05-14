// // HomePage.jsx
// import React, { useEffect, useRef, useState } from "react";
// import videoBg from "../../../assets/videoBg.mp4";
// import { listFilm } from "../../../hooks/mockData";
// import "./index.css";

// const Home = () => {
//   const videoRef = useRef(null);
//   const [isMuted, setIsMuted] = useState(true);

//   useEffect(() => {
//     const playVideo = async () => {
//       try {
//         if (videoRef.current) {
//           await videoRef.current.play();
//         }
//       } catch (err) {
//         console.log("Autoplay failed:", err);
//       }
//     };

//     playVideo();
//   }, []);

//   const toggleMute = () => {
//     if (videoRef.current) {
//       const isCurrentlyMuted = videoRef.current.muted;
//       videoRef.current.muted = !isCurrentlyMuted;
//       setIsMuted(!isCurrentlyMuted);
//     }
//   };

//   return (
//     <div className="main">
//       <div className="overlay"></div>
//       <video ref={videoRef} src={videoBg} autoPlay loop muted={isMuted} />
//       <div className="content">
//         <button onClick={toggleMute} className="volume-button">
//           {isMuted ? "Unmute" : "Mute"}
//         </button>
//         <div className="text-left max-w-4xl whitespace-pre-line break-words hyphens-none text-[20px] font-[gilroy]">
//           {listFilm.map((movie) => (
//             <div key={movie.id} className="movie-item">
//               <h2>
//                 {movie.name} - {movie.genre}
//               </h2>
//               <p>{movie.year}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useRef, useState } from "react";
import videoBg from "../../../assets/videoBg.mp4";
import { listFilm } from "../../../hooks/mockData";
import { VolumeMute, VolumeNotice } from "@icon-park/react";

const Home = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (err) {
        console.log("Autoplay failed:", err);
      }
    };

    playVideo();
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const isCurrentlyMuted = videoRef.current.muted;
      videoRef.current.muted = !isCurrentlyMuted;
      setIsMuted(!isCurrentlyMuted);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden font-[oneFtV]">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={videoBg}
        autoPlay
        loop
        muted={isMuted}
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      />
      {/* Movie List - styled as in screenshot */}
      <div className="absolute left-12 bottom-0 z-20 flex flex-col gap-2 items-start max-w-[1100px]">
        {listFilm.map((movie) => (
          <div key={movie.id} className="relative mb-2 w-fit">
            <span className="absolute -top-4 right-0 text-xs font-[oneFtV] text-white opacity-80 select-none">
              {movie.year}
            </span>
            <span className="block uppercase font-extrabold text-4xl md:text-4xl lg:text-6xl leading-none text-white drop-shadow-lg">
              {movie.name} - {movie.genre}
            </span>
          </div>
        ))}
      </div>
      {/* Volume Button - bottom right */}
      <button
        onClick={toggleMute}
        className="fixed bottom-8 right-8 z-30 bg-transparent p-3 flex items-center justify-center hover:bg-opacity-60 transition"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeMute theme="outline" size="32" fill="#fff" />
        ) : (
          <VolumeNotice theme="outline" size="32" fill="#fff" />
        )}
      </button>
    </div>
  );
};

export default Home;
