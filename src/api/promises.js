import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getTrendingPromise = (type) => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/${type}/week?api_key=${API_KEY}`
  );
};
