import React from "react";
import Avatar from "../avatar/Avatar";

export default function CommentList() {
  return (
    <section>
      <div className="comment-card">
        <div className="comment-card__avatar-cont">
          <Avatar />
        </div>
        <div className="comment-card__right-cont">
          <div className="comment-card__name-cont">
            <span className="comment-card__name">safd</span>
            <span className="comment-card__date">45 minute(s) ago</span>
          </div>
          <p className="comment-card__comment">asfd</p>

          {/* HTML FOR DELETE AND LIKE COMMENT FUNCTIONALITY POTENTIALLY TO BE IMPLEMENTED */}
          {/* <div className="comment-card__icon-cont">
            <img
              className="comment-card__icon"
              src="./assets/icons/icon-delete.svg"
              alt="trashbin icon"
            />
            <img
              className="comment-card__icon"
              src="./assets/icons/icon-like.svg"
              alt="thumbs up icon"
            />
            <span className="comment-card__like-counter">3</span>
          </div> */}
        </div>
      </div>
    </section>
  );
}
