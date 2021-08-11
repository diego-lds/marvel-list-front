import { TYPES } from "../actions/types";

export const setCharacters = (data) => ({
  type: TYPES.FETCH_CHARACTERS,
  payload: data,
});
