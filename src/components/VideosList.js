import React, { useState, useEffect } from "react";

const VideosList = ({ videos, onVideoSelect }) => {
  const [video, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await fetch("../assets/videos"); // Update the route based on your server configuration
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h2>Video List</h2>
      <ul>
        {videos.map((video, index) => (
          <li key={index} onClick={() => onVideoSelect(video)}>
            {video}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideosList;
