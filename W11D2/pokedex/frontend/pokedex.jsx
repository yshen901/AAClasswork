import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'

import { fetchAllPokemans, fetchPokemon } from './util/api_util';
import { receiveAllPokemans, requestAllPokemans, receivePokemon, requestPokemon } from './actions/pokemon_actions';
import { selectAllPokemans } from './reducers/selectors';
import configureStore from './stores/store';

import Root from './components/root_component';


document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  windowFuncs(store);

  ReactDOM.render(<Root store={store}/>, rootEl);
});

function windowFuncs(store) {
  window.fetchAllPokemans = fetchAllPokemans;
  window.receiveAllPokemans = receiveAllPokemans;
  window.requestAllPokemans = requestAllPokemans;
  window.selectAllPokemans = selectAllPokemans;

  window.fetchPokemon = fetchPokemon;
  window.receivePokemon = receivePokemon;
  window.requestPokemon = requestPokemon;

  // window.store = store; don't do this bc it creates scoping issues and nasty bugs
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
}