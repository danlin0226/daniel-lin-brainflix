import React, { useState } from "react";
import "./UploadForm.scss";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/images/icons/publish.svg";

import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";

export default function UploadForm() {
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  //click handlers for submit and cancel
  const onSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    Toastify({
      text: "Successfully uploaded!",
      duration: 2000,
      className: "toast__success",
    }).showToast();

    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  const onCancel = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="upload-form">
      <h1 className="upload-form__header">Upload Video</h1>
      <form className="upload-form__form">
        <div className="upload-form__img-fields-cont">
          <div className="upload-form__label-desc-cont">
            <label className="upload-form__label" htmlFor="">
              VIDEO THUMBNAIL
            </label>
            <img
              className="upload-form__thumbnail"
              src={videoThumbnail}
              alt="top down view of a blue bicycle racing down the road"
            />
          </div>
          <div className="upload-form__form-cont">
            <div className="upload-form__label-desc-cont">
              <label htmlFor="title" className="upload-form__label">
                TITLE YOUR VIDEO
              </label>
              <input
                className="upload-form__text"
                type="text"
                id="title"
                name="title"
                placeholder="Add a title to your video"
                autoComplete="off"
              />
            </div>
            <div className="upload-form__label-desc-cont">
              <label className="upload-form__label" htmlFor="description">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                className="upload-form__text"
                name="description"
                id="description"
                cols="30"
                rows="4"
                placeholder="Add a description to your video"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="upload-form__buttons-cont">
          <div className="upload-form__button-cont">
            <img
              className="upload-form__icon"
              alt="icon with arrow facing up"
              src={publishIcon}
            ></img>
            <button
              className={`upload-form__submit ${
                submitted && "upload-form__submit--disabled"
              }`}
              disabled={submitted}
              onClick={onSubmit}
            >
              PUBLISH
            </button>
          </div>
          <button className="upload-form__cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
