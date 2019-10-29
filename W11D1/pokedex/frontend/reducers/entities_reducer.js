import {combineReducers} from 'redux';
import pokemansReducer from "./pokemans_reducer";

const entitiesReducer = combineReducers({
  pokemans: pokemansReducer,
});

export default entitiesReducer;