import * as types from "../types";

const initState = {
  popularShows: {
    loading: true,
    data: null,
    error: null,
  },
  topRatedShows: {
    loading: true,
    data: null,
    error: null,
  },
  airingTodayShows: {
    loading: true,
    data: null,
    error: null,
  },
  onTheAirShows: {
    loading: true,
    data: null,
    error: null,
  },
};

const showsReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_POPULAR_SHOWS:
      return {
        ...state,
        popularShows: {
          ...state.popularShows,
          data: action.payload,
        },
      };
    case types.GET_POPULAR_SHOWS_LOADING:
      return {
        ...state,
        popularShows: {
          ...state.popularShows,
          loading: action.payload,
        },
      };
    case types.GET_POPULAR_SHOWS_ERROR:
      return {
        ...state,
        popularShows: {
          ...state.popularShows,
          error: action.payload,
        },
      };
    case types.GET_TOP_RATED_SHOWS:
      return {
        ...state,
        topRatedShows: {
          ...state.topRatedShows,
          data: action.payload,
        },
      };
    case types.GET_TOP_RATED_SHOWS_LOADING:
      return {
        ...state,
        topRatedShows: {
          ...state.topRatedShows,
          loading: action.payload,
        },
      };
    case types.GET_TOP_RATED_SHOWS_ERROR:
      return {
        ...state,
        topRatedShows: {
          ...state.topRatedShows,
          error: action.payload,
        },
      };
    case types.GET_AIRING_TODAY_SHOWS:
      return {
        ...state,
        airingTodayShows: {
          ...state.airingTodayShows,
          data: action.payload,
        },
      };
    case types.GET_AIRING_TODAY_SHOWS_LOADING:
      return {
        ...state,
        airingTodayShows: {
          ...state.airingTodayShows,
          loading: action.payload,
        },
      };
    case types.GET_AIRING_TODAY_SHOWS_ERROR:
      return {
        ...state,
        airingTodayShows: {
          ...state.airingTodayShows,
          error: action.payload,
        },
      };
    case types.GET_ON_THE_AIR_SHOWS:
      return {
        ...state,
        onTheAirShows: {
          ...state.onTheAirShows,
          data: action.payload,
        },
      };
    case types.GET_ON_THE_AIR_SHOWS_LOADING:
      return {
        ...state,
        onTheAirShows: {
          ...state.onTheAirShows,
          loading: action.payload,
        },
      };
    case types.GET_ON_THE_AIR_SHOWS_ERROR:
      return {
        ...state,
        onTheAirShows: {
          ...state.onTheAirShows,
          error: action.payload,
        },
      };
    case types.RESET_SHOWS_REDUCER:
      return initState;
    default:
      return state;
  }
};

export default showsReducer;
