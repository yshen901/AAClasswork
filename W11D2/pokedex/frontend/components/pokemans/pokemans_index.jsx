import React from "react";
import PokemonIndexItem from './pokemon_index_item';


export default class PokemansIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemans();
    // this.props.requestPokemon(1);
  }

  //key is same level keyword as props and is passed as this.key
  render() {
    const pokemonIndexItems = this.props.pokemans.map(pokemon => (
      <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />
    ));
    // ALWAYS RETURN IN A MAP
    return (
      <section className="pokedex">
        <ol>{pokemonIndexItems}</ol>
      </section>
    );
  }
}