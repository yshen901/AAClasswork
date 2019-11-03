import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = [];
      return nextState;
    case RECEIVE_SESSION_ERRORS:
      nextState = action.errors.responseJSON
      return nextState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;