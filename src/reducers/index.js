import { combineReducers } from "redux";
import users from "./users";
import answers from "./answers";
import questions from "./questions";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  users,
  questions,
  answers,
  loadingBar: loadingBarReducer
});
