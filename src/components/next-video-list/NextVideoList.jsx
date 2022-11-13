import { Link } from "react-router-dom";
import "./NextVideoList.scss";

export default function NextVideoList({ videos }) {
  return (
    <aside className="next-vid-list">
      <h2 className="next-vid-list__header">NEXT VIDEOS</h2>
      {videos.map((video) => (
        <Link to={`/videos/${video.id}`} key={video.id}>
          <article className="next-vid-list__video">
            <div className="next-vid-list__video-placeholder">
              <img
                className="next-vid-list__video-poster"
                src={video.image}
                alt={video.title} //no alt tags provided for images so use title
                onError={(i) => (i.target.style.display = "none")}
              />
            </div>
            <div className="next-vid-list__right-cont">
              <h3 className="next-vid-list__video-title">{video.title}</h3>
              <span className="next-vid-list__video-channel">
                {video.channel}
              </span>
            </div>
          </article>
        </Link>
      ))}
    </aside>
  );
}
