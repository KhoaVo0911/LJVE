import React, { useEffect, useRef, useState } from "react";
import videoBg from "../../assets/videoBg.mp4";
import "./homepage.css";

const HomePage = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Ensure video plays on component mount
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
    <div className="main">
      <div className="overlay"></div>
      <video ref={videoRef} src={videoBg} autoPlay loop muted={isMuted} />
      <div className="content">
        <h1>Welcome</h1>
        <p>To my site.</p>
        <button onClick={toggleMute} className="volume-button">
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
