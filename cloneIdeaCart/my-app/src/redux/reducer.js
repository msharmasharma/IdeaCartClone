import { SET_INPUT, SET_USER, SHOW_SEARCH } from "./action";

const initState = { user: false, input: "", search: false };

export const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    case SET_INPUT:
      return {
        ...state,
        input: payload,
      };
    case SHOW_SEARCH:
      return {
        ...state,
        search: payload,
      };
    default:
      return state;
  }
};
