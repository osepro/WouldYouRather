import { QUESTIONS } from "../constants";

const initialState = {};

function questions(state = initialState, action) {
  switch (action.type) {
    case QUESTIONS:
      return {
        ...state,
        ...action.question
      };
    default:
      return state;
  }
}

export default questions;
