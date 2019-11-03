import { RECEIVE_ALL_BENCHES, RECEIVE_BENCH } from '../actions/bench_actions'

const benchesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type) {
    case RECEIVE_ALL_BENCHES:
      return action.benches;
    case RECEIVE_BENCH:
      nextState = Object.assign({}, state, action.bench);
      return nextState;
    default:
      return state;
  }
}

export default benchesReducer