import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//importing utils
import { getVideos, getVideoDetails } from "../../utils/axiosUtils.jsx";
import { dynamicTime } from "../../utils/dateUtils.jsx";

//importing components from index component index file for readability
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

  //defaultVideoID will be false BEFORE initial render or the the first video ID AFTER render
  const defaultVideoID = videos.length > 0 ? videos[0].id : false;

  //If params.id is truthy, displayedVideoID becomes that value, otherwise it's the defaultVideoID
  const displayedVideoID = videoID || defaultVideoID;

  const displayedVideos = videos.filter(
    (video) => video.id !== displayedVideoID
  );

  // effect hook for initial videos api call
  useEffect(() => {
    const fetchVideosData = async () => {
      try {
        const request = await getVideos();
        setVideos(request); //sets videos as an array of all videos from api
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideosData();
  }, []);

  //effect hook for video details api call
  useEffect(() => {
    const fetchDetailsData = async () => {
      try {
        const request = await getVideoDetails(displayedVideoID);
        setVideoDetails(request);
      } catch (error) {
        console.error(error);
      }
    };
    displayedVideoID && fetchDetailsData(); //prevents the details from fetching if the displayedVideoID has not been assigned a value
  }, [displayedVideoID]);

  return (
    //statement checks to see if videoDetails data has been fetched. If yes, then render jsx, otherwise do nothing.
    //optionally, a loading screen can be added by using a "if..return (loading)"
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
              <CommentForm
                displayedVideoID={displayedVideoID}
                setVideoDetails={setVideoDetails}
                videoDetails={videoDetails}
              />
              <CommentList
                videoDetails={videoDetails}
                dynamicTime={dynamicTime}
                setVideoDetails={setVideoDetails}
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
