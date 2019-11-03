import * as APIUtil from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

// a template for the reducer, to 
//    1) tell it what action to take
//    2) gives it the information needed to take that action
const receiveCurrentUser = currentUser => {  //why this no take in the user???
  return {
  type: RECEIVE_CURRENT_USER,
  user: currentUser
}};

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

// Only called by mapDispatchToState
export const signup = user => dispatch => APIUtil.signup(user)
  .then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors))
  );

export const login = user => dispatch => APIUtil.login(user)
  .then(
    user => dispatch(receiveCurrentUser(user)), 
    errors => dispatch(receiveErrors(errors))
  );

export const logout = () => dispatch => APIUtil.logout()
  .then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors))
  );
