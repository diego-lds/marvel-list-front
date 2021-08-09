import { combineReducers, createStore } from "redux";

import { charactersReducer } from "./Characters/Characters.reducer.js";

const reducers = combineReducers({
  characters: charactersReducer,
});

const store = createStore(reducers);

const actions = {};

export { actions, store };
