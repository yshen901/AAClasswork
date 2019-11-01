import {combineReducers} from 'redux';
import pokemansReducer from "./pokemans_reducer";
import itemsReducer from './items_reducer';

const entitiesReducer = combineReducers({
  pokemans: pokemansReducer,
  items: itemsReducer
});

export default entitiesReducer;