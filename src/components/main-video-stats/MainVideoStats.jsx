import React from "react";
import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";
import "./MainVideoStats.scss";

export default function MainVideoStats({ videoDetails }) {
  return (
    <div className="video-stats">
      <div className="video-stats__cont-left">
        <span className="video-stats__creator">{`By ${videoDetails.channel}`}</span>
        <span className="video-stats__info">{videoDetails.timestamp}</span>
      </div>
      <div className="video-stats__cont-right">
        <div className="video-stats__icon-info-cont">
          <div className="video-stats__icon-cont">
            <img
              className="video-stats__icon"
              src={viewsIcon}
              alt="icon of an eye"
            ></img>
          </div>
          <span className="video-stats__info">{videoDetails.views}</span>
        </div>
        <div className="video-stats__icon-info-cont">
          <div className="video-stats__icon-cont">
            <img
              className="video-stats__icon"
              src={likesIcon}
              alt="icon of a heart"
            ></img>
          </div>
          <span className="video-stats__info">{videoDetails.likes}</span>
        </div>
      </div>
    </div>
  );
}
