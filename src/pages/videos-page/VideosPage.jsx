import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//importing utils
import { getVideos, getVideoDetails } from "../../utils/axiosUtils.jsx";
import { dynamicTime } from "../../utils/dateUtils.jsx";

//importing components
import {
  MainVideo,
  MainVideoTitle,
  MainVideoStats,
  MainVideoDescription,
  CommentForm,
  CommentList,
  NextVideoList,
} from "../../components";

export default function VideosPage() {
  // define states
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState({});

  const { videoID } = useParams();

  const defaultVideoID = videos.length > 0 ? videos[0].id : false;
  const displayedVideoID = videoID || defaultVideoID;

  const displayedVideos = videos.filter(
    (video) => video.id !== displayedVideoID
  );

  // effect hook for initial videos api call
  useEffect(() => {
    const fetchVideosData = async () => {
      const request = await getVideos();
      setVideos(request); //sets videos as an array of all videos from api
    };
    fetchVideosData();
  }, []);

  //effect hook for video details api call
  useEffect(() => {
    const fetchDetailsData = async () => {
      const request = await getVideoDetails(displayedVideoID);
      setVideoDetails(request);
    };
    displayedVideoID && fetchDetailsData();
  }, [displayedVideoID]);

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
            <NextVideoList videos={displayedVideos} />
          </section>
        </section>
      </main>
    )
  );
}
