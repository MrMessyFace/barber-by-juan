import React from "react";
import Gallery from "../components/Gallery";
import VideoPlayer from "../components/VideoPlayer";

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <h1>GALLERY</h1>
      <Gallery />
      <VideoPlayer />
    </div>
  );
};

export default GalleryPage;
