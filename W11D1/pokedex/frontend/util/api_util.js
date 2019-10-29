export const fetchAllPokemans = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  })
};