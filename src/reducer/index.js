import { combineReducers } from "redux";
import user from "./user";
import spinner from "./spinner";
import post from "./post";
export default combineReducers({
  user,
  spinner,
  post
});
