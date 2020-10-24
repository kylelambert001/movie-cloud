import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

export const getTrendingAsync = (mediaType) => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=${API_KEY}`
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
    `https://api.themoviedb.org/3/movie/${contentId}?api_key=${API_KEY}&append_to_response=credits,similar`
  );
};

export const getShowDetailsAsync = (contentId) => {
  return axios.get(
    `https://api.themoviedb.org/3/tv/${contentId}?api_key=${API_KEY}&append_to_response=credits,episode_groups,similar`
  );
};

export const getPersonDetailsAsync = (contentId) => {
  return axios.get(
    `https://api.themoviedb.org/3/person/${contentId}?api_key=${API_KEY}&append_to_response=movie_credits,tv_credits`
  );
};

export const getSearchResultsAsync = (query, page = 1) => {
  query = encodeURIComponent(query);
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;
  return axios.get(url);
};
