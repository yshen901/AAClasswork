//do this for all container components
import { connect } from 'react-redux'
import PokemansIndex from './pokemans_index'

import { selectAllPokemans }  from '../../reducers/selectors'
import { requestAllPokemans } from '../../actions/pokemon_actions'

const mapStateToProps = state => ({
  pokemans: selectAllPokemans(state) //props should have array not POJO
});

const mapDispatchToProps = dispatch => ({
  // maps to a callback that dispatches the action
  requestAllPokemans: () => dispatch(requestAllPokemans()), 
});

// what this really does is connect the state/dispatch to the PokemansIndex
// class, by passing in the data/funcs as props.

// *** runs to re-map EVERYTIME THE STORE UPDATES **
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemansIndex);