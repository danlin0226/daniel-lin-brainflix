import "./App.scss";
import React, { useState } from "react";

//importing components
import Header from "./components/header/Header";
import MainVideo from "./components/main-video/MainVideo";
import MainVideoTitle from "./components/main-video-title/MainVideoTitle";
import MainVideoStats from "./components/main-video-stats/MainVideoStats";
import MainVideoDescription from "./components/main-video-description/MainVideoDescription";
import CommentForm from "./components/comment-form/CommentForm";
import CommentList from "./components/comment-list/CommentList";
import NextVideoList from "./components/next-video-list/NextVideoList";

//importing utils
import { getVideos, getVideoDetails } from "./utils/utils.jsx";
import { dynamicTime } from "./utils/dateUtils";

function App() {
  const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";

  //define states
  const [videoId, setVideoId] = useState(defaultVideoId);
  const [videoDetails, setVideoDetails] = useState(getVideoDetails(videoId));
  const [videos, setVideos] = useState(getVideos(videoId));

  const clickHandler = (event, id) => {
    event.preventDefault();
    setVideoId(id);
    setVideoDetails(getVideoDetails(id));
    setVideos(getVideos(id));
  };

  return (
    <>
      <Header />
      <main>
        <section className="video-section">
          <MainVideo videoDetails={videoDetails} />
        </section>
        <section className="content">
          <div className="content__left">
            <section className="video-details">
              <MainVideoTitle videoDetails={videoDetails} />
              <MainVideoStats
                videoDetails={videoDetails}
                dynamicTime={dynamicTime}
              />
            </section>
            <MainVideoDescription videoDetails={videoDetails} />
            <section className="comments-section">
              <div className="comment-counter">{`${videoDetails.comments.length} Comments`}</div>
              <CommentForm />
              <CommentList
                videoDetails={videoDetails}
                dynamicTime={dynamicTime}
              />
            </section>
          </div>
          <section className="next-video-section">
            <NextVideoList videos={videos} clickHandler={clickHandler} />
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
