import videos from "../data/videos.json";
import videoDetails from "../data/video-details.json";
import axios from "axios";

//Can clean up axios url with better variables

const API_URL = "https://project-2-api.herokuapp.com";
const API_GET_VIDEOS = `${API_URL}/videos/?api_key=${process.env.REACT_APP_API_KEY}`;
const API_GET_VIDEO_DETAILS = `${API_URL}/videos//?api_key=${process.env.REACT_APP_API_KEY}`;

export const getVideos = async (videoId) => {
  const { data } = await axios.get(API_GET_VIDEOS);
  return data.filter((video) => videoId !== video.id);
};

export const getVideoDetails = async (videoId) => {
  const { data } = await axios.get(
    `${API_URL}/videos/${videoId}/?api_key=${process.env.REACT_APP_API_KEY}`
  );
  console.log("hi", data);
  return data;
};
