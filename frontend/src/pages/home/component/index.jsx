import React, { useEffect, useRef, useState } from "react";
// import videoBg from "../../../assets/videoBg.mp4";
import { listFilm, journalDetails } from "../../../hooks/mockData";
import { useNavigate } from "react-router-dom";

const isMobile = () =>
  typeof window !== "undefined" &&
  (window.innerWidth < 768 ||
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));

const Home = () => {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(
    "/assets/film/video/SHOWREEL.mp4"
  );
  const [isMuted, setIsMuted] = useState(false);
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (isMobile()) {
      setShowOverlay(true);
    }
  }, []);

  useEffect(() => {
    if (!showOverlay && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
      videoRef.current.muted = isMuted;
      videoRef.current.volume = 1.0;
    }
  }, [currentVideo, isMuted, showOverlay]);

  const idToSlug = {};
  journalDetails.forEach((film) => {
    idToSlug[film.id] = film.slug;
  });

  const handleMouseEnter = (movie) => {
    if (movie.videoLocal) {
      setCurrentVideo(movie.videoLocal);
    }
  };

  const handleMouseLeave = () => {
    setCurrentVideo("/assets/film/video/SHOWREEL.mp4");
  };

  const handleOverlayClick = () => {
    setShowOverlay(false);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden font-[VIPTrends]">
      <video
        ref={videoRef}
        src={currentVideo}
        autoPlay={!showOverlay}
        loop
        muted
        playsInline
        preload="none"
        className="fixed top-0 left-0 w-full h-full object-cover z-0 bg-video"
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
        tabIndex={-1}
        style={{ pointerEvents: "none", userSelect: "none" }}
      />

      {showOverlay && isMobile() && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          style={{ pointerEvents: "auto" }}
        >
          <span
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              textShadow: "0 2px 8px #000",
              padding: "16px 32px",
              borderRadius: 8,
              background: "rgba(0,0,0,0.3)",
            }}
          >
            Tap to start video
          </span>
        </div>
      )}

      <div className="fixed left-0 bottom-0 z-20 flex flex-col gap-2 items-start p-12 max-w-[1100px]">
        {listFilm.map((movie) => (
          <div
            key={movie.id}
            className="relative mb-2 sm:mb-3 md:mb-4 w-fit cursor-pointer hover:opacity-80 transition"
            onMouseEnter={() => handleMouseEnter(movie)}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              const slug = idToSlug[movie.id];
              if (slug) {
                navigate(`/film/${slug}`);
              }
            }}
          >
            <span className="absolute -top-3 sm:-top-4 right-0 translate-x-4 sm:translate-x-6 text-[10px] sm:text-xs font-[Gilroy-Light] text-white opacity-80 select-none">
              {movie.year}
            </span>
            <span className="block uppercase text-lg sm:text-2xl md:text-3xl lg:text-[40px] leading-none text-white drop-shadow-lg">
              {movie.name} - {movie.genre}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
