import { saveQuestionAnswer } from "../utils/api";
import { QUESTIONS, VOTE } from "../constants";
import { showLoading, hideLoading } from "react-redux-loading";

export function allquestions(question) {
  return {
    type: QUESTIONS,
    question
  };
}

export function addVote({ authedUser, qid, answer }) {
  return {
    type: VOTE,
    vote: { authedUser, qid, answer }
  };
}

export function saveVote({ qid, answer, id }) {
  return dispatch => {
    const authedUser = id;
    dispatch(showLoading());

    const data = { authedUser, qid, answer };
    dispatch(addVote(data));
    return saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => dispatch(hideLoading()))
      .catch(e => console.log("error found ", e));
  };
}
