import { combineReducers } from "redux";

import homeReducer from "./homeReducer";
import moviesReducer from "./moviesReducer";
import showsReducer from "./showsReducer";
import detailsReducer from "./detailsReducer";

const rootReducer = combineReducers({
  homeReducer: homeReducer,
  moviesReducer: moviesReducer,
  showsReducer: showsReducer,
  detailsReducer: detailsReducer,
});

export default rootReducer;
