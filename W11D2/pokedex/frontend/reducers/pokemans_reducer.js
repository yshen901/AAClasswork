import { RECEIVE_ALL_POKEMANS, RECEIVE_POKEMON } from '../actions/pokemon_actions';

const pokemansReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_ALL_POKEMANS:
      nextState = Object.assign({}, action.pokemans)
      return nextState;
    case RECEIVE_POKEMON:
      return action.pokemon.pokemon;
    default:
      return state;
  }
};

export default pokemansReducer