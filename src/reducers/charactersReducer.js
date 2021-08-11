import { TYPES } from "../store/actions/types";

export const charactersReducer = (state = { characters: [] }, action) => {
  const { payload, type } = action;
  switch (type) {
    case TYPES.FETCH_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };
    case TYPES.SELECT_CHARACTER:
      return {
        ...state,
        selectedCharacter: payload,
      };
    default:
      return state;
  }
};
