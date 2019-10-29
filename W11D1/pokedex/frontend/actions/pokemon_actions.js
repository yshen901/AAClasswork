export const RECEIVE_ALL_POKEMANS = "RECEIVE_ALL_POKEMANS"

export const receiveAllPokemans = (pokemans) => {
  return { type: RECEIVE_ALL_POKEMANS, pokemans }
};