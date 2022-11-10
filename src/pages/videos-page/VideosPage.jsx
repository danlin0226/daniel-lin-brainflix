import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//importing utils
import { getVideos, getVideoDetails } from "../../utils/utils.jsx";
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
  //define states
  const [videos, setVideos] = useState([]);
  console.log("1 videos", videos);
  const [videoDetails, setVideoDetails] = useState({});
  console.log("2 videosDetails", videoDetails);

  const defaultVideoID = videos.length > 0 ? videos[0].id : false;
  console.log("3 default video id", defaultVideoID);

  const { videoID } = useParams();
  console.log("4 params:", videoID);
  const displayedVideoID = videoID || defaultVideoID;

  const displayedVideos = videos.filter(
    (video) => video.id !== displayedVideoID
  );
  console.log("5 displayed videos:", displayedVideos);

  //effect hook for setting videos
  useEffect(() => {
    const fetchVideosData = async () => {
      const request = await getVideos();
      console.log("GET videos result:", request);
      setVideos(request);
    };
    fetchVideosData();
  }, []);

  //effect hook for setting video details
  useEffect(() => {
    const fetchDetailsData = async () => {
      const request = await getVideoDetails(displayedVideoID);
      console.log("GET videoDetails", request);
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
