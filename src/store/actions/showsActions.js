import { batch } from "react-redux";
import { getShowsAsync } from "../../api/promises";

import * as types from "../types";

const action = (type, payload) => {
  return {
    type: type,
    payload: payload,
  };
};

export const getPopularShows = () => {
  return (dispatch, getState) => {
    getShowsAsync("popular")
      .then((data) => {
        batch(() => {
          dispatch(action(types.GET_POPULAR_SHOWS, data.data.results));
          dispatch(action(types.GET_POPULAR_SHOWS_LOADING, false));
        });
      })
      .catch((error) => {
        batch(() => {
          dispatch(action(types.GET_POPULAR_SHOWS_ERROR, error));
          dispatch(action(types.GET_POPULAR_SHOWS_LOADING, false));
        });
      });
  };
};

export const getTopRatedShows = () => {
  return (dispatch, getState) => {
    getShowsAsync("top_rated")
      .then((data) => {
        batch(() => {
          dispatch(action(types.GET_TOP_RATED_SHOWS, data.data.results));
          dispatch(action(types.GET_TOP_RATED_SHOWS_LOADING, false));
        });
      })
      .catch((error) => {
        batch(() => {
          dispatch(action(types.GET_TOP_RATED_SHOWS_ERROR, error));
          dispatch(action(types.GET_TOP_RATED_SHOWS_LOADING, false));
        });
      });
  };
};

export const getAiringTodayShows = () => {
  return (dispatch, getState) => {
    getShowsAsync("airing_today")
      .then((data) => {
        batch(() => {
          dispatch(action(types.GET_AIRING_TODAY_SHOWS, data.data.results));
          dispatch(action(types.GET_AIRING_TODAY_SHOWS_LOADING, false));
        });
      })
      .catch((error) => {
        batch(() => {
          dispatch(action(types.GET_AIRING_TODAY_SHOWS_ERROR, error));
          dispatch(action(types.GET_AIRING_TODAY_SHOWS_LOADING, false));
        });
      });
  };
};

export const getOnTheAirShows = () => {
  return (dispatch, getState) => {
    getShowsAsync("on_the_air")
      .then((data) => {
        batch(() => {
          dispatch(action(types.GET_ON_THE_AIR_SHOWS, data.data.results));
          dispatch(action(types.GET_ON_THE_AIR_SHOWS_LOADING, false));
        });
      })
      .catch((error) => {
        batch(() => {
          dispatch(action(types.GET_ON_THE_AIR_SHOWS_ERROR, error));
          dispatch(action(types.GET_ON_THE_AIR_SHOWS_LOADING, false));
        });
      });
  };
};

export const resetShowsReducer = () => {
  return {
    type: types.RESET_SHOWS_REDUCER,
  };
};
