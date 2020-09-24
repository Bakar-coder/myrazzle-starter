import { SET_LOADED } from "../types";

const setLoaded = () => async (dispatch, getState, api) => {
  try {
    dispatch({ type: SET_LOADED });
  } catch (ex) {
    console.log(ex);
  }
};

export { setLoaded };
