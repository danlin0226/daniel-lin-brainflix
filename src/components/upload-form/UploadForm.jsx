import React, { useState } from "react";
import "./UploadForm.scss";
import publishIcon from "../../assets/images/icons/publish.svg";

import { useNavigate } from "react-router-dom";

import Toastify from "toastify-js";

import { postVideo } from "../../utils/axiosUtils";
import { useEffect } from "react";

export default function UploadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [newVideo, setNewVideo] = useState({
    title: "",
    description: "",
    image: "/images/Upload-video-preview.jpg",
  });
  const [error, setError] = useState([]);
  const [filename, setFilename] = useState("");

  const navigate = useNavigate();

  //validation
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewVideo({ ...newVideo, [name]: value });
    const fieldName = e.target.name;
    if (error.includes(fieldName)) {
      setError(error.filter((e) => e !== fieldName));
    }
  };

  //click handlers for submit and cancel
  const onSubmit = (e) => {
    e.preventDefault();

    //validation
    if (newVideo.title === "") {
      setError([...error, "title"]);
      return;
    }
    if (newVideo.description === "") {
      setError([...error, "description"]);
      return;
    }

    const postVideoData = async () => {
      try {
        await postVideo(newVideo);
        setSubmitted(true);
        Toastify({
          text: "Successfully uploaded!",
          duration: 2000,
          className: "toast__success",
        }).showToast();

        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } catch (error) {
        console.log("error uploading video", error);
      }
    };
    postVideoData();
  };

  useEffect(() => {}, [filename]);

  const uploadHandler = async (e) => {
    // e.preventDefault();
    console.log(e.target.sampleFile.files[0].name);
    setTimeout(() => setFilename(e.target.sampleFile.files[0].name), 1000);
  };

  const onCancel = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className={`upload-form ${submitted && "upload-form--submitted"}`}>
      <h1 className="upload-form__header">Upload Video</h1>
      <form
        id="uploadForm"
        action="http://localhost:8080/upload"
        method="post"
        encType="multipart/form-data"
        onSubmit={uploadHandler}
      >
        <div className="upload-form__label-desc-cont">
          <label className="upload-form__label" htmlFor="">
            VIDEO THUMBNAIL
          </label>
          <input
            className="upload-form__upload"
            type="file"
            name="sampleFile"
          />
          <input
            type="submit"
            value="Upload!"
            className="upload-form__upload"
          />
          <img
            className="upload-form__thumbnail"
            src={process.env.REACT_APP_BACK_END_URL + `/images/${filename}`}
            alt="top down view of a blue bicycle racing down the road"
          />
        </div>
      </form>
      <form className="upload-form__form" onSubmit={onSubmit}>
        <div className="upload-form__img-fields-cont">
          <div className="upload-form__label-desc-cont"></div>
          <div className="upload-form__form-cont">
            <div className="upload-form__label-desc-cont">
              <label htmlFor="title" className="upload-form__label">
                TITLE YOUR VIDEO
              </label>
              <input
                className={`upload-form__text ${
                  error.includes("title") ? "upload-form__text--error" : ""
                }`}
                type="text"
                id="title"
                name="title"
                placeholder="Add a title to your video"
                autoComplete="off"
                onChange={inputChangeHandler}
              />
            </div>

            <div className="upload-form__label-desc-cont">
              <label className="upload-form__label" htmlFor="description">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                className={`upload-form__text ${
                  error.includes("description")
                    ? "upload-form__text--error"
                    : ""
                }`}
                name="description"
                id="description"
                cols="30"
                rows="4"
                placeholder="Add a description to your video"
                onChange={inputChangeHandler}
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
