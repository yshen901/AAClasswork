import * as APIUtil from "../util/bench_api_util";

export const RECEIVE_ALL_BENCHES = "RECEIVE_ALL_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";
export const RECEIVE_BENCH_ERRORS = "RECEIVE_BENCH_ERRORS"

const receiveBench = bench => ({
  type: RECEIVE_BENCH,
  bench
});

const receiveAllBenches = benches => ({
  type: RECEIVE_ALL_BENCHES,
  benches
});

const receiveErrors = errors => ({
  type: RECEIVE_BENCH_ERRORS,
  errors
})

export const fetchBenches = filters => dispatch => {
  APIUtil
    .fetchBenches(filters)
    .then(
      benches => dispatch(receiveAllBenches(benches)),
      errors => console.log(errors)); // IMPLEMENT LATER
}

export const addBench = bench => dispatch => {
  APIUtil
    .addBench(bench)
    .then(
      bench => dispatch(receiveBench(bench)),
      errors => console.log(errors)); // IMPLEMENT LATER
}