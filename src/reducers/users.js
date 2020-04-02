import { USERS, VOTE } from "../constants";

function users(state = {}, action) {
  switch (action.type) {
    case USERS:
      return {
        ...state,
        ...action.users
      };
    case VOTE:
      const { qid, answer, authedUser } = action.vote;

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      };
    default:
      return state;
  }
}

export default users;
