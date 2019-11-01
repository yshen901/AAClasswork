import { RECEIVE_POKEMON } from '../actions/pokemon_actions'

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_POKEMON:
      return action.pokemon.items
    default:
      return state;
  }
};

export default itemsReducer