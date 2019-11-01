import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; //npm install --save redux-logger
import thunk from "redux-thunk"; //npm install --save redux-thunks
import rootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger)));

export default configureStore;