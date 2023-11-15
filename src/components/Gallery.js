import React from "react";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-image">
        <img src={require("../assets/images/gallery-image-01.jpg")} alt="barbershop" />
      </div>
      <div className="gallery-image">
        <img src={require("../assets/images/gallery-image-02.jpg")} alt="haircut" />
      </div>
      <div className="gallery-image">
        <img src={require("../assets/images/gallery-image-03.jpg")} alt="haircut" />
      </div>
      <div className="gallery-image">
        <img src={require("../assets/images/gallery-image-04.jpg")} alt="haircut" />
      </div>
      <div className="gallery-image">
        <img src={require("../assets/images/gallery-image-05.jpg")} alt="haircut" />
      </div>
    </div>
  );
};

export default Gallery;
