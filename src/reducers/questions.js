import { QUESTIONS, VOTE, SAVE_QUESTIONS } from "../constants";

const initialState = {};

function questions(state = initialState, action) {
  switch (action.type) {
    case QUESTIONS:
      return {
        ...state,
        ...action.question,
      };
    case VOTE:
      const { qid, answer, authedUser } = action.vote;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };
    case SAVE_QUESTIONS:
      const { id } = action.question;
      return {
        ...state,
        [id]: action.question,
      };
    default:
      return state;
  }
}

export default questions;
