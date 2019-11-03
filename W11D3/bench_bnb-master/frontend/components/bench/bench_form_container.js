import { connect } from 'react-redux';
import { addBench } from '../../actions/bench_actions';
import BenchForm from './bench_form';

const mapDispatchToProps = (dispatch) => ({
  addBench: (bench) => dispatch(addBench(bench))
})

export default connect(
  null,
  mapDispatchToProps
)(BenchForm)