import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from '../middleware/thunk';

import rootReducer from '../reducers/root_reducer';

//logger makes the console output prev state, action, and next state after each action
const configureStore = () => createStore(rootReducer, applyMiddleware(thunk, logger));

export default configureStore;