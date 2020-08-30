import { combineReducers } from "redux";

import homeReducer from "./homeReducer";
import moviesReducer from "./moviesReducer";
import showsReducer from "./showsReducer";

const rootReducer = combineReducers({
  homeReducer: homeReducer,
  moviesReducer: moviesReducer,
  showsReducer: showsReducer,
});

export default rootReducer;
