import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemans } from './util/api_util'
import { receiveAllPokemans } from './actions/pokemon_actions'
import configureStore from './stores/store';



document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  windowFuncs(store);
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});

function windowFuncs(store) {
  window.fetchAllPokemans = fetchAllPokemans;
  window.receiveAllPokemans = receiveAllPokemans;
  // window.store = store; don't do this bc it creates scoping issues and nasty bugs
  window.getState = store.getState;
  window.dispatch = store.dispatch;
}