export const fetchAllPokemans = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  })
};

export const fetchPokemon = (pokemon_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon/${pokemon_id}`
  })
};