import React, { useState } from "react";
import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";
import "./MainVideoStats.scss";
import { likeVideo } from "../../utils/axiosUtils";
import { useEffect } from "react";

export default function MainVideoStats({ videoDetails, dynamicTime }) {
  const [likeCount, setLikeCount] = useState(0);
  const likes = videoDetails.likes;

  const likeHandleClick = (e) => {
    e.preventDefault();
    likeVideo(videoDetails.id);
    setLikeCount((prevLikeCount) => prevLikeCount + 1);
  };

  useEffect(() => {
    setLikeCount(likes);
  }, [likes]);

  return (
    <div className="video-stats">
      <div className="video-stats__cont-left">
        <span className="video-stats__creator">{`By ${videoDetails.channel}`}</span>
        <span className="video-stats__info">
          {dynamicTime(videoDetails.timestamp)}
        </span>
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
              onClick={likeHandleClick}
            ></img>
          </div>
          <span className="video-stats__info">
            {likeCount.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
