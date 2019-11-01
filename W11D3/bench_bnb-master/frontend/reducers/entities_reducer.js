import { combineReducers } from "redux";
import usersReducer from "./users_reducer";

//NOT A FUNCTION
const entitiesReducer = combineReducers({
  users: usersReducer,
});

export default entitiesReducer;