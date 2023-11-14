import React, { useState, useEffect } from "react";
import img01 from "../assets/images/image-01.jpg";
import img02 from "../assets/images/image-02.jpg";
import img03 from "../assets/images/image-03.jpg";

const Slideshow = () => {
  // Define an array of image sources
  const images = [
    img01,
    img02,
    img03,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to cycle through images
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval time as needed (in milliseconds)

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      {/* Display the current image */}
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
    </div>
  );
};

export default Slideshow;
