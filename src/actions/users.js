import { USERS, VOTE } from "../constants";

export function allusers(users) {
  return {
    type: USERS,
    users
  };
}

/*export function voteoption({ authedUser, qid, answer }) {
  return {
    type: VOTE,
    vote: { authedUser, qid, answer }
  };
}*/
