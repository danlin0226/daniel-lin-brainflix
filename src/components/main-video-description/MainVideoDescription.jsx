import "./MainVideoDescription.scss";

export default function MainVideoDescription({ videoDetails }) {
  return (
    <div className="video-description">
      <p className="video-description__text">{videoDetails.description}</p>
    </div>
  );
}
