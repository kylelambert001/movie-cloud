import { combineReducers } from "redux";

import homeReducer from "./homeReducer";
import moviesReducer from "./moviesReducer";

const rootReducer = combineReducers({
  homeReducer: homeReducer,
  moviesReducer: moviesReducer,
});

export default rootReducer;
