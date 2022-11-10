import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//importing utils
import {
  getVideos,
  getVideoDetails,
  getDefaultVideoID,
} from "../../utils/utils.jsx";
import { dynamicTime } from "../../utils/dateUtils.jsx";

//importing components
import MainVideo from "../../components/main-video/MainVideo";
import MainVideoTitle from "../../components/main-video-title/MainVideoTitle";
import MainVideoStats from "../../components/main-video-stats/MainVideoStats";
import MainVideoDescription from "../../components/main-video-description/MainVideoDescription";
import CommentForm from "../../components/comment-form/CommentForm";
import CommentList from "../../components/comment-list/CommentList";
import NextVideoList from "../../components/next-video-list/NextVideoList";

export default function VideosPage() {
  const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";

  //define states
  const [videoId, setVideoId] = useState(defaultVideoId);
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState({});

  //params hook to obtain the videoID from video link
  const params = useParams();
  console.log("params", params.videoID);

  useEffect(() => {
    params.videoID && setVideoId(params.videoID);
  }, [params.videoID]);

  // //effect hook to set initial video on load
  // useEffect(() => {
  //   const fetchDefaultVideo = async () => {
  //     const request = await getDefaultVideoID();
  //     console.log("initial Id", request);
  //     setVideoId(request);
  //   };
  //   fetchDefaultVideo();
  // }, []);

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
      console.log("videoDetails", videoId);
      setVideoDetails(result);
    };
    fetchDetailsData();
  }, [videoId]);

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
            <NextVideoList videos={videos} />
          </section>
        </section>
      </main>
    )
  );
}
