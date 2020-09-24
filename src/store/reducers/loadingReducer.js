import { SET_LOADED } from "../types";

const loadingState = {
  loading: true,
};

export default (state = loadingState, actions) => {
  const { type } = actions;

  switch (type) {
    case SET_LOADED:
      return { ...state, loading: false };
    default:
      return state;
  }
};
