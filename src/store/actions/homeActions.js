import { getTrendingAsync } from "../../api/promises";

import * as types from "../types";
import { batch } from "react-redux";

const action = (type, payload) => {
  return {
    type: type,
    payload: payload,
  };
};

export const getTrendingMovies = () => {
  return (dispatch, getState) => {
    getTrendingAsync("movie")
      .then((data) => {
        batch(() => {
          dispatch(action(types.GET_TRENDING_MOVIES, data.data));
          dispatch(action(types.GET_TRENDING_MOVIES_LOADING, false));
        });
      })
      .catch((error) => {
        batch(() => {
          dispatch(action(types.GET_TRENDING_MOVIES_ERROR, error));
          dispatch(action(types.GET_TRENDING_MOVIES_LOADING, false));
        });
      });
  };
};

export const getTrendingShows = () => {
  return (dispatch, getState) => {
    getTrendingAsync("tv")
      .then((data) => {
        batch(() => {
          dispatch(action(types.GET_TRENDING_SHOWS, data.data));
          dispatch(action(types.GET_TRENDING_SHOWS_LOADING, false));
        });
      })
      .catch((error) => {
        batch(() => {
          dispatch(action(types.GET_TRENDING_SHOWS_ERROR, error));
          dispatch(action(types.GET_TRENDING_SHOWS_LOADING, false));
        });
      });
  };
};

export const resetHomeReducer = () => {
  return {
    type: types.RESET_HOME_REDUCER,
  };
};
