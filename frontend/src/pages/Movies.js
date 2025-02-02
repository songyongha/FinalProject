// src/pages/Movies.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Movies.css';

const Movies = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8088/api/videos')
      .then(response => setVideos(response.data))
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  return (
    <div className="movies">
      <h1>Movies</h1>
      <div className="movies-grid">
        {videos.map(video => (
          <div key={video.id} className="movie-item">
            <video width="320" height="320" controls controlsList="nodownload" onContextMenu={(e) => e.preventDefault()}>
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
