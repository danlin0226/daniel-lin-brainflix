import React from "react";
import deleteIcon from "../../assets/images/icons/delete.svg";
import { deleteComment, getVideoDetails } from "../../utils/axiosUtils.jsx";

import "./CommentList.scss";

export default function CommentList({
  videoDetails,
  dynamicTime,
  setVideoDetails,
}) {
  const handleClick = (e) => {
    e.preventDefault();

    const deleteData = async () => {
      try {
        await deleteComment(videoDetails.id, e.target.id);
        const data = await getVideoDetails(videoDetails.id);
        setVideoDetails(data); // this triggers a rerender in the parent component
      } catch (error) {
        console.error(error);
      }
    };
    deleteData();
  };

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
