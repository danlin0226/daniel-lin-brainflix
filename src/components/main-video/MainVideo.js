import "./MainVideo.scss";

function MainVideo({ videoDetails }) {
  return (
    <video
      className="main-video"
      src=""
      poster={videoDetails.image}
      controls
    ></video>
  );
}

export default MainVideo;
