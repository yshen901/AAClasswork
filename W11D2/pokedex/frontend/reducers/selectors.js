export const selectAllPokemans = (state) => {
  return Object.values(state.entities.pokemans)
};