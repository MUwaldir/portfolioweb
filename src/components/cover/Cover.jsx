import React, { useState } from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <div className={!videoLoaded ? "cover_negro": "cover-container" } >
      
      <video className="video" onLoadedData={handleVideoLoaded} src={coverVideo} autoPlay loop muted />
      <h1>Waldir Merjildo Ubaldo</h1>
      <p>System Enginiering | Developer web | Front-end | Back-end | Henry Student </p>
    </div>
  );
};

export default Cover;