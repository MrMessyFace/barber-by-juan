import React from "react";
import Gallery from "../components/Gallery";
import VideoPlayer from "../components/VideoPlayer";

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <h1>PHOTO GALLERY</h1>
      <Gallery />
      <h1>VIDEO GALLERY</h1>
      <VideoPlayer />
    </div>
  );
};

export default GalleryPage;
