export const SET_USER = "SET_USER";
export const SET_INPUT = "SET_INPUT";
export const SHOW_SEARCH = "SHOW_SEARCH";

export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};

export const setInput = (payload) => {
  return {
    type: SET_INPUT,
    payload,
  };
};

export const showSearch = (payload) => {
  return {
    type: SHOW_SEARCH,
    payload,
  };
};
