import React, { useState } from "react";
import Gallery from "../components/Gallery";
import VideoPlayer from "../components/VideoPlayer";
import VideosList from "../components/VideosList";
import Instagram from "../components/Instagram";

const GalleryPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoDirectory = "../assets/videos";
  const videoFiles = ["video-01.mp4", "video-02.mp4"];

  const getVideoUrl = (video) => `${videoDirectory}/${video}`;

  return (
    <div className="gallery-page">
      <h1>GALLERY</h1>
      <br></br>
      <Gallery />
      <br></br>
      <div className="video-section">
        <VideoPlayer
          videoUrl={selectedVideo ? getVideoUrl(selectedVideo) : null}
        />
        <VideosList
          videos={videoFiles}
          onVideoSelect={(video) => setSelectedVideo(video)}
        />
      </div>
      <br></br>
      <Instagram />
    </div>
  );
};

export default GalleryPage;
