import "./CommentForm.scss";
import commentIcon from "../../assets/images/icons/add_comment.svg";
import Avatar from "../avatar/Avatar";

export default function CommentForm() {
  return (
    <>
      <div className="form-section">
        <Avatar />
        <form className="form" id="form">
          <div className="form__label-input">
            <label className="form__label" htmlFor="comment">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className="form__comment-input"
              name="comment"
              id="comment"
              cols="30"
              rows="4"
              placeholder="Add a new comment"
              autoComplete="off"
            ></textarea>
          </div>
          <div className="form__button-cont">
            <img
              className="form__comment-icon"
              alt="icon with arrow facing up"
              src={commentIcon}
            ></img>
            <button type="submit" className="form__submit">
              COMMENT
            </button>
          </div>
        </form>
      </div>
      ;
    </>
  );
}
