import {
  RETRIEVE_CHARACTERS,
} from "../actions/types";

const initialState = {
  item:{},
};

const charactersReducer = (characters = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_CHARACTERS:
      return payload;
    default:
      return characters;
  }
};

export default charactersReducer;