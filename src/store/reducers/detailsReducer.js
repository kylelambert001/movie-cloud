import * as types from "../types";

const initState = {
  data: null,
  loading: true,
  error: null,
};

const detailsReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_MOVIE_DETAILS: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case types.GET_MOVIE_DETAILS_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case types.GET_MOVIE_DETAILS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case types.GET_SHOW_DETAILS: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case types.GET_SHOW_DETAILS_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case types.GET_SHOW_DETAILS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case types.GET_PERSON_DETAILS: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case types.GET_PERSON_DETAILS_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case types.GET_PERSON_DETAILS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case types.RESET_DETAILS_REDUCER:
      return initState;

    default:
      return initState;
  }
};

export default detailsReducer;
