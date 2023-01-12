import {
  SET_SIGIN,
  SET_LOGIN,
} from "../actions/type";

const initialState = {
  profile: {},
  login: {},
  isLoginSuccess: false,
  isLoginFail: false,
};

const actionsMap = {
  [SET_SIGIN]: (state, action) => ({
    ...state,
    profile: action.payload,
  }),

  [SET_LOGIN]: (state, action) => ({
    ...state,
    login: action.payload,
  }),
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  if (!fn) {
    return state;
  }
  return fn(state, action);
}