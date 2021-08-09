import { combineReducers } from "redux";

import { charactersReducer } from "./charactersReducer";

const reducers = combineReducers({
  characters: charactersReducer,
});

export default reducers;
