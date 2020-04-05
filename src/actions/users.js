import { USERS } from "../constants";

export function allusers(users) {
  return {
    type: USERS,
    users,
  };
}
