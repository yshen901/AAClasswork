import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';

import { requestPokemon } from '../../actions/pokemon_actions'

// ownProps contains the information from the link
const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemans,
  // pokemon_id: ownProps.match.params.id
});

const mapDispatchToProps = dispatch => ({
  requestPokemon: (pokemon_id) => dispatch(requestPokemon(pokemon_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);