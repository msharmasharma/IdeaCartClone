import { SET_USER } from "./action";

export const userReducer = (state = { user: false }, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};
