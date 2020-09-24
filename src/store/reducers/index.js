import { combineReducers } from "redux";
import auth from "./authRedcer";
import loading from "./loadingReducer";
export default combineReducers({
  auth,
  loading,
});
