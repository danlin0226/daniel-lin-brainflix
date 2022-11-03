import "./MainVideoTitle.scss";

const MainVideoTitle = ({ videoDetails }) => {
  return <h1 className="main-video-title">{videoDetails.title}</h1>;
};

export default MainVideoTitle;
