import React, { useState } from "react";
import axios from "axios";

//importing utils
import { getVideos, getVideoDetails, test } from "../../utils/utils.jsx";
import { dynamicTime } from "../../utils/dateUtils.jsx";

//importing components
import MainVideo from "../../components/main-video/MainVideo";
import MainVideoTitle from "../../components/main-video-title/MainVideoTitle";
import MainVideoStats from "../../components/main-video-stats/MainVideoStats";
import MainVideoDescription from "../../components/main-video-description/MainVideoDescription";
import CommentForm from "../../components/comment-form/CommentForm";
import CommentList from "../../components/comment-list/CommentList";
import NextVideoList from "../../components/next-video-list/NextVideoList";
import { useEffect } from "react";

// const API_URL = "https://project-2-api.herokuapp.com";
// const API_GET_VIDEOS = "/videos";

// const API_URL_AUTH = `${API_URL}?api_key=${process.env.REACT_APP_API_KEY}`;
// const getVideos = ""

// console.log(SEARCH_URL);

export default function VideosPage() {
  const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";

  //define states
  const [videoId, setVideoId] = useState(defaultVideoId);

  const [videoDetails, setVideoDetails] = useState({});
  const [videos, setVideos] = useState([]);

  console.log(videos);
  console.log(videoDetails);

  useEffect(() => {
    const fetchData = async () => {
      const x = await getVideos(videoId);
      setVideos(x);
    };
    const fetchDataTwo = async () => {
      const y = await getVideoDetails(videoId);
      setVideoDetails(y);
    };
    fetchData();
    fetchDataTwo();
  }, [videoId]);

  // useEffect(() => {
  //   const fetchDataTwo = async () => {
  //     const y = await getVideoDetails(videoId);
  //     setVideoDetails(y);
  //     console.log("herro:", y);
  //   };
  //   fetchDataTwo();
  // }, [videoId]);

  const clickHandler = (event, id) => {
    event.preventDefault();
    setVideoId(id);
  };
  return (
    Object.keys(videoDetails).length > 0 && (
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
              <div className="comment-counter">
                {videoDetails.comments.length > 0
                  ? `${videoDetails.comments.length} Comments`
                  : "Be the first to comment!"}
              </div>
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
    )
  );
}
