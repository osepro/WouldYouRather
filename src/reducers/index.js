import { combineReducers } from "redux";
import users from "./users";
import answers from "./answers";
import questions from "./questions";
import userloggedin from "./userloggedin";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  userloggedin,
  users,
  questions,
  answers,
  loadingBar: loadingBarReducer
});
