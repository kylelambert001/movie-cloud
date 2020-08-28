import { combineReducers } from "redux";

import homeReducer from "./homeReducer.js";

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
