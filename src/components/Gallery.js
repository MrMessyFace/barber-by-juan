import React from "react";

const Gallery = () => {
  return (
    <div className="gallery-section">
      <div className="gallery-caption">
        <div className="gallery-photo">
          <img
            src={require("../assets/images/gallery-image-01.jpg")}
            alt="barbershop"
          />
        </div>
        <p className="invisible">Image 1</p>
      </div>
      <div className="gallery-caption">
        <div className="gallery-photo">
          <img
            src={require("../assets/images/gallery-image-08.jpg")}
            alt="barbershop"
          />
        </div>
        <p className="invisible">Image 2</p>
      </div>
      <div className="gallery-caption">
        <div className="gallery-photo">
          <img
            src={require("../assets/images/gallery-image-09.jpg")}
            alt="barbershop"
          />
        </div>
        <p className="invisible">Image 3</p>
      </div>
      <div className="gallery-caption">
        <div className="gallery-photo">
          <img
            src={require("../assets/images/gallery-image-10.jpg")}
            alt="barbershop"
          />
        </div>
        <p className="invisible">Image 4</p>
      </div>
      <div className="gallery-caption">
        <div className="gallery-photo">
          <img
            src={require("../assets/images/gallery-image-02.jpg")}
            alt="haircut"
          />
        </div>
        <p className="invisible">Image 5</p>
      </div>
      <div className="gallery-caption">
        <div className="gallery-photo">
          <img
            src={require("../assets/images/gallery-image-03.jpg")}
            alt="haircut"
          />
        </div>
        <p className="invisible">Image 6</p>
      </div>
      <div className="gallery-caption">
        <div className="gallery-photo">
          <img
            src={require("../assets/images/gallery-image-04.jpg")}
            alt="haircut"
          />
        </div>
        <p className="invisible">Image 7</p>
      </div>
      <div className="gallery-caption">
        <div className="gallery-photo">
          <img
            src={require("../assets/images/gallery-image-05.jpg")}
            alt="haircut"
          />
        </div>
        <p className="invisible">Image 8</p>
      </div>
      <div className="gallery-caption">
        <div className="gallery-photo">
          <img
            src={require("../assets/images/gallery-image-06.jpg")}
            alt="haircut"
          />
        </div>
        <p>Before a Perm</p>
      </div>
      <div className="gallery-caption">
        <div className="gallery-photo">
          <img
            src={require("../assets/images/gallery-image-07.jpg")}
            alt="haircut"
          />
        </div>
        <p>After a Perm</p>
      </div>
      
    </div>
  );
};

export default Gallery;
