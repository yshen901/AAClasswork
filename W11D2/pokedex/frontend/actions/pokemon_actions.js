import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMANS = "RECEIVE_ALL_POKEMANS";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";

export const receiveAllPokemans = (pokemans) => {
  return { type: RECEIVE_ALL_POKEMANS, pokemans }
};

export const receivePokemon = (pokemon) => {
  return { type: RECEIVE_POKEMON, pokemon }
};

// test with dispatch(requestAllPokemon())
export const requestAllPokemans = () => (dispatch) => (
  APIUtil.fetchAllPokemans()
    .then(pokemans => dispatch(receiveAllPokemans(pokemans)))
)

// test with dispatch(requestPokemon(1))
export const requestPokemon = (pokemon_id) => (dispatch) => (
  APIUtil.fetchPokemon(pokemon_id)
    .then(pokemon => dispatch(receivePokemon(pokemon)))
)
