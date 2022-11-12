import axios from "axios";

const BASE_URL = "https://project-2-api.herokuapp.com";

//created an object to store the endpoint URI
const requests = {
  fetchVideos: `${BASE_URL}/videos/?api_key=${process.env.REACT_APP_API_KEY}`,
  fetchVideoDetails: (videoID) =>
    `${BASE_URL}/videos/${videoID}/?api_key=${process.env.REACT_APP_API_KEY}`,
  postComment: (videoID) =>
    `${BASE_URL}/videos/${videoID}/comments/?api_key=${process.env.REACT_APP_API_KEY}`,
};

export const getVideos = async () => {
  const { data } = await axios.get(requests.fetchVideos);
  return data;
};

export const getVideoDetails = async (videoId) => {
  const { data } = await axios.get(requests.fetchVideoDetails(videoId));
  return data;
};

export const postComment = async (videoId, commentObj) => {
  await axios.post(requests.postComment(videoId), commentObj);
  const { data } = await axios.get(requests.fetchVideoDetails(videoId));
  return data;
};

// postComment("c05b9a93-8682-4ab6-aff2-92ebb4bbfc14", {
//   name: "daniel",
//   comment: "this is a test",
// });
