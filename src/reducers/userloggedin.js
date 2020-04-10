import { SET_LOGGED_IN_USER } from "../constants";

export default function userloggedin(state = false, action) {
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return action.loggediduser;
    default:
      return state;
  }
}
