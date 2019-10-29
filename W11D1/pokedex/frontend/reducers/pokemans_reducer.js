import { RECEIVE_ALL_POKEMANS } from '../actions/pokemon_actions';

const pokemansReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_ALL_POKEMANS:
      nextState = Object.assign({}, action.pokemans)
      return nextState;
    default:
      return state;
  }
};

export default pokemansReducer