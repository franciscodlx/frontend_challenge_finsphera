import {
  RETRIEVE_CHARACTERS,
} from "../actions/type";

const initialState = {
  items: {},
};

const actionsMap = {
  [RETRIEVE_CHARACTERS]: (state, action) => ({
    ...state,
    items: action.payload,
  }),
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  if (!fn) {
    return state;
  }
  return fn(state, action);
}