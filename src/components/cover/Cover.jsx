import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Waldir Merjildo Ubaldo</h1>
      <p>System Enginiering | Developer web | Front-end | Back-end | Henry Student </p>
    </div>
  );
};

export default Cover;