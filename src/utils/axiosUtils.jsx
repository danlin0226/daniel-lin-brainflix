import axios from "axios";

const BASE_URL = "https://project-2-api.herokuapp.com";

//created an object to store each endpoint URI
const requests = {
  fetchVideos: `${BASE_URL}/videos/?api_key=${process.env.REACT_APP_API_KEY}`,
  fetchVideoDetails: (videoID) =>
    `${BASE_URL}/videos/${videoID}/?api_key=${process.env.REACT_APP_API_KEY}`,
  postComment: (videoID) =>
    `${BASE_URL}/videos/${videoID}/comments/?api_key=${process.env.REACT_APP_API_KEY}`,
  deleteComment: (videoID, commentID) =>
    `${BASE_URL}/videos/${videoID}/comments/${commentID}/?api_key=${process.env.REACT_APP_API_KEY}`,
};

export const getVideos = async () => {
  try {
    const { data } = await axios.get(requests.fetchVideos);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getVideoDetails = async (videoId) => {
  try {
    const { data } = await axios.get(requests.fetchVideoDetails(videoId));
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postComment = async (videoId, commentObj) => {
  try {
    await axios.post(requests.postComment(videoId), commentObj);
  } catch (error) {
    console.error(error);
  }
};

export const deleteComment = async (videoId, commentID) => {
  try {
    await axios.delete(requests.deleteComment(videoId, commentID));
  } catch (error) {
    console.error(error);
  }
};
