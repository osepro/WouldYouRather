import { getAllUsers } from "../utils/api";
import { getAllQuestions } from "../utils/api";
import { allusers } from "./users";
import { questions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleUsersLoad() {
  return dispatch => {
    dispatch(showLoading());
    return getAllUsers().then(users => {
      dispatch(allusers(users));
      dispatch(hideLoading());
    });
  };
}

export function handleQuestionsLoad() {
  return dispatch => {
    dispatch(showLoading());
    return getAllQuestions().then(question => {
      dispatch(questions(question));
      dispatch(hideLoading());
    });
  };
}
