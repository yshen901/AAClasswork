import { UPDATE_BOUNDS } from "../actions/filter_actions";

const filtersReducer = (state = {"bounds": {}}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch(action.type) {
    case UPDATE_BOUNDS:
      nextState["bounds"] = action.bounds;
      return nextState;
    default:
      return state;
  }
}

export default filtersReducer;