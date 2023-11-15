import React from "react";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-image">
        <img src={require("../assets/images/gallery-image-01.jpg")} alt="Barber Shop" />
      </div>
      <div className="gallery-image">
        <img src={require("../assets/images/gallery-image-02.jpg")} alt="Barber Shop" />
      </div>
      <div className="gallery-image">
        <img src={require("../assets/images/gallery-image-03.jpg")} alt="Barber Shop" />
      </div>
    </div>
  );
};

export default Gallery;
