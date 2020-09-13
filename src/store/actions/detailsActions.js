import {
  getMovieDetailsAsync,
  getShowDetailsAsync,
  getPersonDetailsAsync,
} from "../../api/promises";

import * as types from "../types";
import { batch } from "react-redux";

const action = (type, payload) => {
  return {
    type: type,
    payload: payload,
  };
};

export const getMovieDetails = (contentId) => {
  return (dispatch, getState) => {
    getMovieDetailsAsync(contentId)
      .then((data) => {
        batch(() => {
          dispatch(action(types.GET_MOVIE_DETAILS, data.data));
          dispatch(action(types.GET_MOVIE_DETAILS_LOADING, false));
        });
      })
      .catch((error) => {
        batch(() => {
          dispatch(action(types.GET_MOVIE_DETAILS_ERROR, error));
          dispatch(action(types.GET_MOVIE_DETAILS_LOADING, false));
        });
      });
  };
};

export const getShowDetails = (contentId) => {
  return (dispatch, getState) => {
    getShowDetailsAsync(contentId)
      .then((data) => {
        batch(() => {
          dispatch(action(types.GET_SHOW_DETAILS, data.data));
          dispatch(action(types.GET_SHOW_DETAILS_LOADING, false));
        });
      })
      .catch((error) => {
        batch(() => {
          dispatch(action(types.GET_SHOW_DETAILS_ERROR, error));
          dispatch(action(types.GET_SHOW_DETAILS_LOADING, false));
        });
      });
  };
};

export const getPersonDetails = (contentId) => {
  return (dispatch, getState) => {
    getPersonDetailsAsync(contentId)
      .then((data) => {
        batch(() => {
          dispatch(action(types.GET_PERSON_DETAILS, data.data));
          dispatch(action(types.GET_PERSON_DETAILS_LOADING, false));
        });
      })
      .catch((error) => {
        batch(() => {
          dispatch(action(types.GET_PERSON_DETAILS_ERROR, error));
          dispatch(action(types.GET_PERSON_DETAILS_LOADING, false));
        });
      });
  };
};

export const resetDetailsReducer = () => {
  return {
    type: types.RESET_DETAILS_REDUCER,
  };
};
