import React, { useEffect, useRef, useState } from "react";
import videoBg from "../../../assets/videoBg.mp4";
import { listFilm, filmDetails } from "../../../hooks/mockData";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          videoRef.current.muted = isMuted;
          videoRef.current.volume = 1.0;
          await videoRef.current.play();
        }
      } catch (err) {
        console.log("Autoplay failed:", err);
        setAutoplayError(true);
      }
    };

    playVideo();
  }, [isMuted]);

  const idToSlug = {};
  filmDetails.forEach((film) => {
    idToSlug[film.id] = film.slug;
  });

  return (
    <div className="relative w-full h-full overflow-hidden font-[VIPTrends]">
      <video
        ref={videoRef}
        src={videoBg}
        autoPlay
        loop
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="fixed left-0 bottom-0 z-20 flex flex-col gap-2 items-start p-12 max-w-[1100px]">
        {listFilm.map((movie) => (
          <div
            key={movie.id}
            className="relative mb-2 w-fit cursor-pointer hover:opacity-80 transition"
            onClick={() => {
              const slug = idToSlug[movie.id];
              if (slug) {
                navigate(`/film/${slug}`);
              }
            }}
          >
            <span className="absolute -top-4 right-0 translate-x-6 text-xs font-[Gilroy-Light] text-white opacity-80 select-none">
              {movie.year}
            </span>
            <span className="block uppercase text-4xl md:text-4xl lg:text-6xl leading-none text-white drop-shadow-lg">
              {movie.name} - {movie.genre}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
