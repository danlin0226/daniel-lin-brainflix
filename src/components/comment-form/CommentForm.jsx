import { useState } from "react";
import "./CommentForm.scss";

import commentIcon from "../../assets/images/icons/add_comment.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";

import { postComment, getVideoDetails } from "../../utils/axiosUtils.jsx";

export default function CommentForm({ displayedVideoID, setVideoDetails }) {
  const [commentObj, setCommentObj] = useState({
    //default name is John smith because mock provides no name input
    name: "John Smith",
    comment: "",
  });
  const [error, setError] = useState([]);

  //this functions removes error items in state once a user starts typing. Makes the form more user friendly.
  //on change, this function removes any items in the error state
  const inputChangeHandler = (e) => {
    setCommentObj({ ...commentObj, comment: e.target.value });

    const fieldName = e.target.name;

    if (error.includes(fieldName)) {
      setError(error.filter((e) => e !== fieldName));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //if the input field value is empty on submit, add an error item to state
    if (e.target.comment.value === "") {
      setError([...error, e.target.comment.name]);
      return;
    }

    const postData = async () => {
      try {
        await postComment(displayedVideoID, commentObj);
        const data = await getVideoDetails(displayedVideoID);
        setVideoDetails(data);
      } catch (error) {
        console.error(error);
      }
    };
    postData();
    e.target.comment.value = "";
  };

  return (
    <>
      <div className="form-section">
        <div className="form-section__avatar-cont">
          <div className="form-section__avatar-placeholder">
            <img
              className="form-section__avatar"
              src={avatar}
              alt="display pic of user"
              onError={(i) => (i.target.style.display = "none")}
            />
          </div>
        </div>
        <form className="form" id="form" onSubmit={onSubmit}>
          <div className="form__label-input">
            <label className="form__label" htmlFor="comment">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className={`form__comment-input ${
                error.includes("comment") ? "form__comment-input--error" : ""
              }`}
              name="comment"
              id="comment"
              cols="30"
              rows="4"
              placeholder="Add a new comment"
              autoComplete="off"
              onChange={inputChangeHandler}
            ></textarea>
          </div>
          <div className="form__button-cont">
            <img
              className="form__comment-icon"
              alt="icon of a chat bubble"
              src={commentIcon}
            ></img>
            <button type="submit" className="form__submit">
              COMMENT
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
