import React from "react";
import ReactPlayer from "react-player";

import myVideo1 from "../assets/videos/video-01.mp4";
import myVideo2 from "../assets/videos/video-02.mp4";
import myVideo3 from "../assets/videos/video-03.mp4";
import myVideo4 from "../assets/videos/video-04.mp4";

const VideoPlayer = () => {
  return (
    <div className="video-player-section">
      <div><ReactPlayer url={myVideo1} width="auto" height="500px" controls={true} /></div>
      <div><ReactPlayer url={myVideo2} width="auto" height="500px" controls={true} /></div>
      <div><ReactPlayer url={myVideo3} width="auto" height="500px" controls={true} /></div>
      <div><ReactPlayer url={myVideo4} width="auto" height="500px" controls={true} /></div>
    </div>
  );
};

export default VideoPlayer;
