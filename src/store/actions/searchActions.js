import * as types from "../types";
import { batch } from "react-redux";

import { getSearchResultsAsync } from "../../api/promises";

export const getSearchResults = (query, page) => {
  return (dispatch, getState) => {
    dispatch({
      type: types.GET_SEARCH_RESULTS_LOADING,
      payload: true,
    });
    getSearchResultsAsync(query, page)
      .then((data) => {
        batch(() => {
          dispatch({
            type: types.GET_SEARCH_RESULTS,
            payload: data.data,
          });
          dispatch({
            type: types.GET_SEARCH_RESULTS_LOADING,
            payload: false,
          });
        });
      })
      .catch((error) => {
        batch(() => {
          dispatch({ type: types.GET_SEARCH_RESULTS_ERROR, payload: error });
          dispatch({
            type: types.GET_SEARCH_RESULTS_LOADING,
            payload: false,
          });
        });
      });
  };
};

export const resetSearchReducer = () => {
  return {
    type: types.RESET_SEARCH_REDUCER,
  };
};
