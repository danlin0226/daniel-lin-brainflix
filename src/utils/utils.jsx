import videos from "../data/videos.json";
import videoDetails from "../data/video-details.json";

export const getVideos = (videoId) => {
  return videos.filter((video) => videoId !== video.id);
};

export const getVideoDetails = (videoId) => {
  return videoDetails.find((videoDetail) => videoDetail.id === videoId);
};
