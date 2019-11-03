import { connect } from 'react-redux';
import Search from './search';
import { fetchBenches } from '../../actions/bench_actions';
import { updateBounds } from '../../actions/filter_actions';
import { getBenches } from '../../selectors/bench_selector';

const mapStateToProps = (state, ownProps) => ({
  benches: getBenches(state.entities.benches)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // fetchBenches: (filters) => dispatch(fetchBenches(filters)),
  updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
