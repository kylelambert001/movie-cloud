import * as types from "../types";

const initState = {
  movies: {
    loading: true,
    data: null,
    error: null,
  },
  shows: {
    loading: true,
    data: null,
    error: null,
  },
};

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_TRENDING_MOVIES:
      return {
        ...state,
        movies: {
          ...state.movies,
          data: action.payload,
        },
      };
    case types.GET_TRENDING_MOVIES_LOADING:
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: action.payload,
        },
      };
    case types.GET_TRENDING_MOVIES_ERROR:
      return {
        ...state,
        movies: {
          ...state.movies,
          error: action.payload,
        },
      };
    case types.GET_TRENDING_SHOWS:
      return {
        ...state,
        shows: {
          ...state.shows,
          data: action.payload,
        },
      };
    case types.GET_TRENDING_SHOWS_LOADING:
      return {
        ...state,
        shows: {
          ...state.shows,
          loading: action.payload,
        },
      };
    case types.GET_TRENDING_SHOWS_ERROR:
      return {
        ...state,
        shows: {
          ...state.shows,
          error: action.payload,
        },
      };
    case types.RESET_HOME_STATE:
      return initState;
    default:
      return state;
  }
};

export default homeReducer;
