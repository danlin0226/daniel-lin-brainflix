import "./MainVideo.scss";

function MainVideo({ videoDetails }) {
  return (
    <div className="main-video-cont">
      <video
        className="main-video"
        poster={process.env.REACT_APP_BACK_END_URL + videoDetails.image}
        controls
      ></video>
    </div>
  );
}

export default MainVideo;
