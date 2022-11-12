import React from "react";
import "./CommentList.scss";

export default function CommentList({ videoDetails, dynamicTime }) {
  return (
    <section>
      {videoDetails.comments
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((comment) => (
          <div className="comment-card" key={comment.id}>
            <div className="comment-card__avatar-placeholder">
              <img
                className="comment-card__avatar"
                src=""
                alt="display pic for user"
                onError={(i) => (i.target.style.display = "none")}
              />
            </div>
            <div className="comment-card__right-cont">
              <div className="comment-card__name-cont">
                <span className="comment-card__name">{comment.name}</span>
                <span className="comment-card__date">
                  {dynamicTime(comment.timestamp)}
                </span>
              </div>
              <p className="comment-card__comment">{comment.comment}</p>

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
        ))}
    </section>
  );
}
