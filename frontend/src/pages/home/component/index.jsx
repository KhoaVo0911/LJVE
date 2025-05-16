import React, { useEffect, useRef, useState } from "react";
import videoBg from "../../../assets/videoBg.mp4";
import { listFilm, filmDetails } from "../../../hooks/mockData";
import { VolumeMute, VolumeNotice } from "@icon-park/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [autoplayError, setAutoplayError] = useState(false);
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

  const handleUserPlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      videoRef.current.play();
      setIsMuted(false);
      setAutoplayError(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuteState = !videoRef.current.muted;
      videoRef.current.muted = newMuteState;
      setIsMuted(newMuteState);
    }
  };

  // Map id to slug for navigation
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

      <div className="absolute left-12 bottom-0 z-20 flex flex-col gap-2 items-start max-w-[1100px]">
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

      {/* Volume Toggle Button */}
      {/* <button
        onClick={toggleMute}
        className="fixed bottom-8 right-20 z-30 bg-transparent p-3 flex items-center justify-center hover:bg-opacity-60 transition"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeMute theme="outline" size="32" fill="#fff" />
        ) : (
          <VolumeNotice theme="outline" size="32" fill="#fff" />
        )}
      </button> */}
    </div>
  );
};

export default Home;
