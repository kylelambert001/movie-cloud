import * as types from "../types";

const initState = {
  trendingMovies: {
    loading: true,
    data: null,
    error: null,
  },
  trendingShows: {
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
        trendingMovies: {
          ...state.trendingMovies,
          data: action.payload,
        },
      };
    case types.GET_TRENDING_MOVIES_LOADING:
      return {
        ...state,
        trendingMovies: {
          ...state.trendingMovies,
          loading: action.payload,
        },
      };
    case types.GET_TRENDING_MOVIES_ERROR:
      return {
        ...state,
        trendingMovies: {
          ...state.trendingMovies,
          error: action.payload,
        },
      };
    case types.GET_TRENDING_SHOWS:
      return {
        ...state,
        trendingShows: {
          ...state.trendingShows,
          data: action.payload,
        },
      };
    case types.GET_TRENDING_SHOWS_LOADING:
      return {
        ...state,
        trendingShows: {
          ...state.trendingShows,
          loading: action.payload,
        },
      };
    case types.GET_TRENDING_SHOWS_ERROR:
      return {
        ...state,
        trendingShows: {
          ...state.trendingShows,
          error: action.payload,
        },
      };
    case types.RESET_HOME_REDUCER:
      return initState;
    default:
      return initState;
  }
};

export default homeReducer;
