import "./MainVideo.scss";

function MainVideo({ videoDetails }) {
  return (
    <div className="main-video-cont">
      <video
        className="main-video"
        src=""
        poster={videoDetails.image}
        controls
      ></video>
    </div>
  );
}

export default MainVideo;
