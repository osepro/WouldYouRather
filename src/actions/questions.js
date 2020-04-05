import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { QUESTIONS, VOTE, SAVE_QUESTIONS } from "../constants";
import { showLoading, hideLoading } from "react-redux-loading";

export function allquestions(question) {
  return {
    type: QUESTIONS,
    question,
  };
}

export function addVote({ authedUser, qid, answer }) {
  return {
    type: VOTE,
    vote: { authedUser, qid, answer },
  };
}

export function saveNewQuestion(question) {
  return {
    type: SAVE_QUESTIONS,
    question,
  };
}

export function createNewQuestion({ id, optionOneText, optionTwoText }) {
  return (dispatch) => {
    const author = id;
    dispatch(showLoading());

    return saveQuestion({ author, optionOneText, optionTwoText })
      .then((question) => dispatch(saveNewQuestion(question)))
      .then(() => dispatch(hideLoading()))
      .catch((e) => console.log("error occured ", e));
  };
}

export function saveVote({ qid, answer, id }) {
  return (dispatch) => {
    const authedUser = id;
    dispatch(showLoading());

    const data = { authedUser, qid, answer };
    dispatch(addVote(data));
    return saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => dispatch(hideLoading()))
      .catch((e) => console.log("error occured ", e));
  };
}
