import React from "react";
import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";
import "./MainVideoStats.scss";

export default function MainVideoStats() {
  return (
    <div className="video-stats">
      <div className="video-stats__cont-left">
        <span className="video-stats__creator">By Read Crow</span>
        <span className="video-stats__info">07/11/2021</span>
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
          <span className="video-stats__info">1,001,023</span>
        </div>
        <div className="video-stats__icon-info-cont">
          <div className="video-stats__icon-cont">
            <img
              className="video-stats__icon"
              src={likesIcon}
              alt="icon of a heart"
            ></img>
          </div>
          <span className="video-stats__info">110,985</span>
        </div>
      </div>
    </div>
  );
}
