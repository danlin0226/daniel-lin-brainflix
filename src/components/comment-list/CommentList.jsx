import React from "react";
import { useState, useEffect } from "react";
import deleteIcon from "../../assets/images/icons/delete.svg";
import { deleteComment } from "../../utils/axiosUtils.jsx";

import "./CommentList.scss";

export default function CommentList({
  videoDetails,
  dynamicTime,
  setVideoDetails,
}) {
  const [commentId, setCommentId] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setCommentId(e.target.id);
  };

  useEffect(() => {
    const deleteData = async () => {
      try {
        const data = await deleteComment(videoDetails.id, commentId);
        setVideoDetails(data);
      } catch (error) {
        console.error(error);
      }
    };
    commentId && deleteData();
  }, [videoDetails.id, commentId, setVideoDetails]);

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

              <div className="comment-card__icon-cont">
                <img
                  onClick={handleClick}
                  className="comment-card__icon"
                  id={comment.id}
                  src={deleteIcon}
                  alt="trash bin icon"
                />
                {/* HTML FOR DELETE AND LIKE COMMENT FUNCTIONALITY POTENTIALLY TO BE IMPLEMENTED */}
                {/* <span className="comment-card__like-counter">3</span> */}
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
