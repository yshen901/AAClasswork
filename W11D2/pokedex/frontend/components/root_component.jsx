import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import PokemansIndexContainer from './pokemans/pokemans_index_container'
import PokemonDetailContainer from './pokemans/pokemon_detail_container'

// Note: There is no actual class called PokemansIndexContainer, but the container
//       implicitly names the exported "connect" return as that. It does by using
//       the PokemansIndex class and the given state/functions to create PokemansIndexContainer.
const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route exact path="/pokemon/:pokemon_Id" component= {PokemonDetailContainer} />
      <Route exact path="/" component = {PokemansIndexContainer} />
    </HashRouter>
  </Provider>
);

export default Root;