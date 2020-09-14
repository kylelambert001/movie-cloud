import * as types from "../types";

const initState = {
  data: [],
  loading: false,
  error: null,
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_SEARCH_RESULTS:
      return {
        ...state,
        data: action.payload,
      };
    case types.GET_SEARCH_RESULTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case types.GET_SEARCH_RESULTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case types.RESET_SEARCH_REDUCER:
      return initState;
    default:
      return initState;
  }
};

export default searchReducer;
