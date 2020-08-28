import { trendingPromise } from "../../api/promises";

import * as types from "../types";

export const getTrendingMovies = () => {
  return (dispatch, getState) => {
    trendingPromise("movie")
      .then((data) => {
        dispatch({
          type: types.GET_TRENDING_MOVIES,
          payload: data.data,
        });
        dispatch({
          type: types.GET_TRENDING_MOVIES_LOADING,
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: types.GET_TRENDING_MOVIES_ERROR,
          payload: error,
        });
        dispatch({
          type: types.GET_TRENDING_MOVIES_LOADING,
          payload: false,
        });
      });
  };
};

export const getTrendingShows = () => {
  return (dispatch, getState) => {
    trendingPromise("tv")
      .then((data) => {
        dispatch({
          type: types.GET_TRENDING_SHOWS,
          payload: data.data,
        });
        dispatch({
          type: types.GET_TRENDING_SHOWS_LOADING,
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: types.GET_TRENDING_SHOWS_ERROR,
          payload: error,
        });
        dispatch({
          type: types.GET_TRENDING_SHOWS_LOADING,
          payload: false,
        });
      });
  };
};

export const resetHomeState = () => {
  return {
    type: types.RESET_HOME_STATE,
  };
};
