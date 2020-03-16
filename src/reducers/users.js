import { USERS } from "../constants";

function users(state = {}, action) {
  switch (action.type) {
    case USERS:
      return {
        ...state,
        ...action.users
      };
    default:
      return state;
  }
}

export default users;
