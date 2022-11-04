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

//importing utils
import { getVideos, getVideoDetails } from "./utils/utils.jsx";
import NextVideoList from "./components/next-video-list/NextVideoList";

function App() {
  const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const testId = "99478bed-6428-49ed-8eaa-f245a5414336";

  //define states
  const [videoId, setVideoId] = useState(defaultVideoId);
  console.log("video ID:", videoId);
  const [videoDetails, setVideoDetails] = useState(getVideoDetails(videoId));
  console.log("single video details:", videoDetails);
  const [videos, setVideos] = useState(getVideos(videoId));
  console.log("string with all videos", videos);

  return (
    <>
      <Header />
      <main>
        <section className="video-section">
          <MainVideo videoDetails={videoDetails} />
          <MainVideoTitle videoDetails={videoDetails} />
          <MainVideoStats videoDetails={videoDetails} />
          <MainVideoDescription videoDetails={videoDetails} />
        </section>
        <section className="comments-section">
          <div className="comment-counter">{`${videoDetails.comments.length} Comments`}</div>
          <CommentForm />
          <CommentList videoDetails={videoDetails} />
        </section>
        <section className="next-video-section">
          <NextVideoList videos={videos} />
        </section>
      </main>
    </>
  );
}

export default App;
