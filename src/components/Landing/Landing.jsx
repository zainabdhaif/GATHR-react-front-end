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
          src="https://download-video.akamaized.net/v3-1/playback/93eb83a5-5d71-4966-abed-a0b38b1e1ce7/78d113db-6e51ed0b?__token__=st=1724064725~exp=1724079125~acl=%2Fv3-1%2Fplayback%2F93eb83a5-5d71-4966-abed-a0b38b1e1ce7%2F78d113db-6e51ed0b%2A~hmac=f51b7a8e0bf07654eb6d1bdcebf9551395970a9ce27a38a1f06594f9081c8675&r=dXMtd2VzdDE%3D"
        ></video>
      </div>
      <div>
        <h2>Upcoming Events</h2>
      </div>
    </main>
  );
};

export default Landing;
