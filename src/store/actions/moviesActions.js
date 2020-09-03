import { batch } from "react-redux";
import { getMoviesAsync } from "../../api/promises";

import * as types from "../types";

const action = (type, payload) => {
  return {
    type: type,
    payload: payload,
  };
};

export const getPopularMovies = () => {
  return (dispatch, getState) => {
    getMoviesAsync("popular")
      .then((data) => {
        batch(() => {
          dispatch(action(types.GET_POPULAR_MOVIES, data.data.results));
          dispatch(action(types.GET_POPULAR_MOVIES_LOADING, false));
        });
      })
      .catch((error) => {
        batch(() => {
          dispatch(action(types.GET_POPULAR_MOVIES_ERROR, error));
          dispatch(action(types.GET_POPULAR_MOVIES_LOADING, false));
        });
      });
  };
};

export const getNowPlayingMovies = () => {
  return (dispatch, getState) => {
    getMoviesAsync("now_playing")
      .then((data) => {
        batch(() => {
          dispatch(action(types.GET_NOW_PLAYING_MOVIES, data.data.results));
          dispatch(action(types.GET_NOW_PLAYING_MOVIES_LOADING, false));
        });
      })
      .catch((error) => {
        batch(() => {
          dispatch(action(types.GET_NOW_PLAYING_MOVIES_ERROR, error));
          dispatch(action(types.GET_NOW_PLAYING_MOVIES_LOADING, false));
        });
      });
  };
};

export const getTopRatedMovies = () => {
  return (dispatch, getState) => {
    getMoviesAsync("top_rated")
      .then((data) => {
        batch(() => {
          dispatch(action(types.GET_TOP_RATED_MOVIES, data.data.results));
          dispatch(action(types.GET_TOP_RATED_MOVIES_LOADING, false));
        });
      })
      .catch((error) => {
        batch(() => {
          dispatch(action(types.GET_TOP_RATED_MOVIES_ERROR, error));
          dispatch(action(types.GET_TOP_RATED_MOVIES_LOADING, false));
        });
      });
  };
};

export const getUpcomingMovies = () => {
  return (dispatch, getState) => {
    getMoviesAsync("upcoming")
      .then((data) => {
        batch(() => {
          dispatch(action(types.GET_UPCOMING_MOVIES, data.data.results));
          dispatch(action(types.GET_UPCOMING_MOVIES_LOADING, false));
        });
      })
      .catch((error) => {
        batch(() => {
          dispatch(action(types.GET_UPCOMING_MOVIES_ERROR, error));
          dispatch(action(types.GET_UPCOMING_MOVIES_LOADING, false));
        });
      });
  };
};

export const resetMoviesReducer = () => {
  return {
    type: types.RESET_MOVIES_REDUCER,
  };
};
