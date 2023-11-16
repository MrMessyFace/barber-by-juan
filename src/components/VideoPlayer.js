import React, { useState, useRef } from "react";

const VideoPlayer = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoFiles = ["video-01.mp4", "video-02.mp4", "video-03.mp4"]; // Add your video file names
  const videoRef = useRef(null);

  const playNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoFiles.length);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <video
        ref={videoRef}
        controls
        width="300"
        height="400"
        onEnded={playNextVideo} // Play the next video when the current one ends
      >
        <source
          src={`..assets/videos/${videoFiles[currentVideoIndex]}`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
