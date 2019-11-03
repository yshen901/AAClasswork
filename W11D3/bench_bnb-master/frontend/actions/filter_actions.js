export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

import { fetchBenches } from './bench_actions'

const changeBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds
});


// THUNK ACTIONS WILL AUTOMATICALLY HAVE DISPATCH AND GETSTATE PASSED TO THEM
// NO NEED TO CURRY THEM YOURSELF
export const updateBounds = (bounds) => {
  return (dispatch, getState) => {
    dispatch(changeBounds(bounds));
    return fetchBenches(getState().ui.filters.bounds)(dispatch)
  }
};

/* EXACTLY THE SAME AS
export const updateBounds = (bounds) => (dispatch, getState) => {
  dispatch(changeBounds(bounds));
  return fetchBenches(getState().ui.filters.bounds)(dispatch)
};
*/
