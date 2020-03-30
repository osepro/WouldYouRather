import { saveQuestion } from "../utils/api";
import { QUESTIONS } from "../constants";

export function allquestions(question) {
  return {
    type: QUESTIONS,
    question
  };
}

export function saveQuest(data) {
  /*return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      text,
      author: authedUser,
      replyingTo
    })
      .then(tweet => dispatch(addTweet(tweet)))
      .then(() => dispatch(hideLoading()));
  };*/
}
