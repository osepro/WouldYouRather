import { getInitialData } from "../utils/api";
import { allusers } from "./users";
import { allquestions } from "./questions";

import { showLoading, hideLoading } from "react-redux-loading";

export function handleUsersLoad() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(allusers(users));
      dispatch(allquestions(questions));
      dispatch(hideLoading());
    });
  };
}
