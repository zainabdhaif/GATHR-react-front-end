import "./Landing.css";

const Landing = () => {
  return (
    <main>
      <div className="video-container">
        <video
          autoPlay
          muted
          loop
          className="video"
          src="../public/video/video.mp4"
        ></video>
      </div>
      <div>
        <h2>Upcoming Events</h2>
      </div>
    </main>
  );
};

export default Landing;
