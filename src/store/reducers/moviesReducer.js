import * as types from "../types";

const initState = {
  popularMovies: {
    loading: true,
    data: null,
    error: null,
  },
  nowPlayingMovies: {
    loading: true,
    data: null,
    error: null,
  },
  topRatedMovies: {
    loading: true,
    data: null,
    error: null,
  },
  upcomingMovies: {
    loading: true,
    data: null,
    error: null,
  },
};

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          data: action.payload,
        },
      };
    case types.GET_POPULAR_MOVIES_LOADING:
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          loading: action.payload,
        },
      };
    case types.GET_POPULAR_MOVIES_ERROR:
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          error: action.payload,
        },
      };
    case types.GET_NOW_PLAYING_MOVIES:
      return {
        ...state,
        nowPlayingMovies: {
          ...state.nowPlayingMovies,
          data: action.payload,
        },
      };
    case types.GET_NOW_PLAYING_MOVIES_LOADING:
      return {
        ...state,
        nowPlayingMovies: {
          ...state.nowPlayingMovies,
          loading: action.payload,
        },
      };
    case types.GET_NOW_PLAYING_MOVIES_ERROR:
      return {
        ...state,
        nowPlayingMovies: {
          ...state.nowPlayingMovies,
          error: action.payload,
        },
      };

    case types.GET_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: {
          ...state.topRatedMovies,
          data: action.payload,
        },
      };
    case types.GET_TOP_RATED_MOVIES_LOADING:
      return {
        ...state,
        topRatedMovies: {
          ...state.topRatedMovies,
          loading: action.payload,
        },
      };
    case types.GET_TOP_RATED_MOVIES_ERROR:
      return {
        ...state,
        topRatedMovies: {
          ...state.topRatedMovies,
          error: action.payload,
        },
      };
    case types.GET_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: {
          ...state.upcomingMovies,
          data: action.payload,
        },
      };
    case types.GET_UPCOMING_MOVIES_LOADING:
      return {
        ...state,
        upcomingMovies: {
          ...state.upcomingMovies,
          loading: action.payload,
        },
      };
    case types.GET_UPCOMING_MOVIES_ERROR:
      return {
        ...state,
        upcomingMovies: {
          ...state.upcomingMovies,
          error: action.payload,
        },
      };
    case types.RESET_MOVIES_REDUCER:
      return initState;
    default:
      return initState;
  }
};

export default moviesReducer;
