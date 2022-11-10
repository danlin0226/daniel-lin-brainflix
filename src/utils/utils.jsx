import axios from "axios";

//created an object to store the endpoint URI
const BASE_URL = "https://project-2-api.herokuapp.com";

const requests = {
  fetchVideos: `${BASE_URL}/videos/?api_key=${process.env.REACT_APP_API_KEY}`,
  fetchVideoDetails: (videoID) =>
    `${BASE_URL}/videos/${videoID}/?api_key=${process.env.REACT_APP_API_KEY}`,
};

export const getDefaultVideoID = async () => {
  const { data } = await axios.get(requests.fetchVideos);
  return data[0].id;
};

export const getVideos = async (videoId) => {
  const { data } = await axios.get(requests.fetchVideos);
  return data.filter((video) => videoId !== video.id);
};

export const getVideoDetails = async (videoId) => {
  const { data } = await axios.get(requests.fetchVideoDetails(videoId));
  return data;
};
