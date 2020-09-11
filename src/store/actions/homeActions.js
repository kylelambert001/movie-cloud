import { getTrendingAsync } from "../../api/promises";

import * as types from "../types";
import { batch } from "react-redux";

const action = (type, payload) => {
  return {
    type: type,
    payload: payload,
  };
};

// export const getAllTrending = () => {
//   return (dispatch, getState) => {
//     Promise.all([getTrendingAsync("movie"), getTrendingAsync("tv")])
//       .then((data) => {
//         batch(() => {
//           dispatch(action(types.GET_TRENDING_MOVIES, data[0].data.results));
//           dispatch(action(types.GET_TRENDING_SHOWS, data[1].data.results));
//           dispatch(action(types.HOME_LOADING, false));
//         });
//       })
//       .catch((error) => {
//         batch(() => {
//           dispatch(action(types.HOME_ERROR, error));
//           dispatch(action(types.HOME_LOADING, false));
//         });
//       });
//   };
// };

export const getTrendingMovies = () => {
  return (dispatch, getState) => {
    getTrendingAsync("movie")
      .then((data) => {
        batch(() => {
          dispatch(action(types.GET_TRENDING_MOVIES, data.data.results));
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
          dispatch(action(types.GET_TRENDING_SHOWS, data.data.results));
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
