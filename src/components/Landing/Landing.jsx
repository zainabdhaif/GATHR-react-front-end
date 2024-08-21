import React from 'react';
import './Landing.css'; 

const Landing = () => {
  return (
    <main>

      <div className="video-container">
        <video
          autoPlay
          muted
          loop
          className="video w-100 h-100"
          src="/video/video.mp4"
        ></video>
        <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
          <h1 className="display-3 text-white">Welcome to Gathr</h1>
        </div>
      </div>
    </main>
  );
};

export default Landing;
