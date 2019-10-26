import { combineReducers } from "redux";
import todosReducer from "./todos_reducer";

//rootReducer is an Object, not a callback
const rootReducer = combineReducers({
  todos: todosReducer,
  tasks: todosReducer,
  dogs: todosReducer
});


export default rootReducer;