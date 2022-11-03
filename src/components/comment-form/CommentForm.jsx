import "./CommentForm.scss";
// import avatar from "../../assets/images/Mohan-muruge.jpg";
import Avatar from "../avatar/Avatar";

export default function CommentForm() {
  return (
    <>
      <h2 className="comment-section__header">Join the Conversation</h2>
      <div className="form-section">
        <Avatar />
        <form className="form" id="form">
          <div className="form__label-input">
            <label className="form__label" htmlFor="name">
              NAME
            </label>
            <input
              className="form__name-input"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              autoComplete="off"
            />
          </div>
          <div className="form__label-input">
            <label className="form__label" htmlFor="comment">
              COMMENT
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
          <div>
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
