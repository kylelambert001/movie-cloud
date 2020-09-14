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
    `https://api.themoviedb.org/3/movie/${contentId}?api_key=${API_KEY}&append_to_response=credits`
  );
};

export const getShowDetailsAsync = (contentId) => {
  return axios.get(
    `https://api.themoviedb.org/3/tv/${contentId}?api_key=${API_KEY}&append_to_response=credits,episode_groups`
  );
};

export const getPersonDetailsAsync = (contentId) => {
  return axios.get(
    `https://api.themoviedb.org/3/person/${contentId}?api_key=${API_KEY}`
  );
};

export const getSearchResultsAsync = (query, page = 1) => {
  return axios.get("https://api.themoviedb.org/3/search/multi", {
    params: {
      api_key: API_KEY,
      language: "en-US",
      query: encodeURIComponent(query),
      page: page,
    },
  });
};
