import { TYPES } from "../store/actions/types";

export const charactersReducer = (state = { characters: [] }, action) => {
  const { payload, type } = action;
  switch (type) {
    case TYPES.FETCH_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };
    default:
      return state;
  }
};
