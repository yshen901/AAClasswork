import React from 'react';

export default class PokemonDetail extends React.Component {
  componentDidMount() {
    // there must be a matching "pokemon_Id" in the route
    this.props.requestPokemon(this.props.match.params.pokemon_Id);

    // Used in conjunction with "pokemon_id: ownProps.match.params.id" passed in
    //      from the container. 
    // this.props.requestPokemon(this.props.pokemon_id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemon_Id !== this.props.match.params.pokemon_Id){
      this.props.requestPokemon(this.props.match.params.pokemon_Id)
      // debugger
    }
  }

  render() {
    return (
    <section className="pokemon">
      <img className="pokemon-image" src={this.props.pokemon.image_url}/>

      <h1 className="pokemon-name">{this.props.pokemon.name} </h1>
      <p> Type: {this.props.pokemon.poke_type} </p>
      <p> Attack: {this.props.pokemon.attack}</p>
      <p> Defense: {this.props.pokemon.defense}</p>
      <p> Moves: 
          {this.props.pokemon.moves}
      </p>
    </section>
    )
  }
}