import React, { useState, useEffect } from "react";
import img01 from "../assets/images/slideshow-image-01.jpg";
import img02 from "../assets/images/slideshow-image-02.jpg";
import img03 from "../assets/images/slideshow-image-03.jpg";
import img04 from "../assets/images/slideshow-image-04.jpg";
import img05 from "../assets/images/slideshow-image-05.jpg";

const Slideshow = () => {
  const images = [img01, img02, img03, img04, img05];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt="slideshow" />
    </div>
  );
};

export default Slideshow;
