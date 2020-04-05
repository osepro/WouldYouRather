import { USERS, VOTE, SAVE_QUESTIONS } from "../constants";

function users(state = {}, action) {
  switch (action.type) {
    case USERS:
      return {
        ...state,
        ...action.users,
      };
    case VOTE:
      const { qid, answer, authedUser } = action.vote;

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    case SAVE_QUESTIONS:
      const { author, id } = action.question;
      return {
        ...state,
        [action.question.author]: {
          ...state[author],
          questions: state[author].questions.concat([id]),
        },
      };

    default:
      return state;
  }
}

export default users;
