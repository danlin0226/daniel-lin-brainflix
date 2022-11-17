import axios from "axios";

const BACK_END_URL = process.env.REACT_APP_BACK_END_URL;

//created an object to store each endpoint URI
const requests = {
  fetchVideos: `${BACK_END_URL}/videos/`,
  fetchVideoDetails: (videoID) => `${BACK_END_URL}/videos/${videoID}/`,
  postComment: (videoID) => `${BACK_END_URL}/videos/${videoID}/comments/`,
  deleteComment: (videoID, commentID) =>
    `${BACK_END_URL}/videos/${videoID}/comments/${commentID}/`,
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
