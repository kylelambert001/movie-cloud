import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getTrendingAsync = (mediaType) => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${API_KEY}`
  );
};

export const getMoviesAsync = (listType) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${listType}?api_key=${API_KEY}`
  );
};

export const getShowsAsync = (listType) => {
  return axios.get(
    `https://api.themoviedb.org/3/tv/${listType}?api_key=${API_KEY}`
  );
};

export const getMovieDetailsAsync = (contentId) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${contentId}?api_key=${API_KEY}&append_to_response=credits,images`
  );
};

export const getShowDetailsAsync = (contentId) => {
  return axios.get(
    `https://api.themoviedb.org/3/tv/${contentId}?api_key=${API_KEY}&append_to_response=credits,images,episode_groups`
  );
};
