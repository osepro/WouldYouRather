import { ANSWER } from "../constants";

const initialState = {
  members: []
};

function answer(state = initialState, action) {
  switch (action.type) {
    case ANSWER:
      return Object.assign({}, state, {
        members: state.members.concat(action.payload)
      });
    default:
      return state;
  }
}

export default answer;
