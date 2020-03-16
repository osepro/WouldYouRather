import { QUESTIONS } from "../constants";

const initialState = {};

function users(state = initialState, action) {
  switch (action.type) {
    case QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    default:
      return state;
  }
}

export default users;
