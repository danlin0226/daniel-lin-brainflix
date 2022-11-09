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

export default function VideosPage() {
  const defaultVideoId = "c05b9a93-8682-4ab6-aff2-92ebb4bbfc14";

  //define states
  const [videoId, setVideoId] = useState(defaultVideoId);

  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState({});

  //effect hook for setting videos
  useEffect(() => {
    const fetchVideosData = async () => {
      const request = await getVideos(videoId);
      console.log("get videos result:", request);
      setVideos(request);
    };
    fetchVideosData();
  }, [videoId]);

  //effect hook for setting video details
  useEffect(() => {
    const fetchDetailsData = async () => {
      const result = await getVideoDetails(videoId);
      console.log("videoDetails results:", result);
      setVideoDetails(result);
    };
    fetchDetailsData();
  }, [videoId]);

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
