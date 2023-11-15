import React, { useState, useEffect } from "react";
import img01 from "../assets/images/slideshow-image-01.jpg";
import img02 from "../assets/images/slideshow-image-02.jpg";
import img03 from "../assets/images/slideshow-image-03.jpg";

const Slideshow = () => {
  const images = [img01, img02, img03];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]); // Add images.length to the dependency array

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt="slideshow" />
    </div>
  );
};

export default Slideshow;
