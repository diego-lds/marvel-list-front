import { combineReducers } from "redux";

import { charactersReducer } from "./charactersReducer";

const reducers = combineReducers({
  charactersReducer,
});

export default reducers;
