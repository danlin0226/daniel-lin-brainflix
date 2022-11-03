import "./MainVideo.scss";

function MainVideo({ videoDetails }) {
  console.log(videoDetails.image);
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
