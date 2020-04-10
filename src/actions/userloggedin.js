import { SET_LOGGED_IN_USER } from "../constants";

export function userloggedin(loggediduser) {
  return {
    type: SET_LOGGED_IN_USER,
    loggediduser,
  };
}
