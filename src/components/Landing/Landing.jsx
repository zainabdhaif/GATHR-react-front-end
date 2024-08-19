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
          src="https://download-video.akamaized.net/v3-1/playback/93eb83a5-5d71-4966-abed-a0b38b1e1ce7/78d113db-6e51ed0b?__token__=st=1724050086~exp=1724064486~acl=%2Fv3-1%2Fplayback%2F93eb83a5-5d71-4966-abed-a0b38b1e1ce7%2F78d113db-6e51ed0b%2A~hmac=0368c0ae55cfa6eb6013b214653a7e4a04b2fb53dfdb235a07580acbbf13658a&r=dXMtd2VzdDE%3D"
        ></video>
      </div>
      <div>
        <h2>Upcoming Events</h2>
      </div>
    </main>
  );
};

export default Landing;
