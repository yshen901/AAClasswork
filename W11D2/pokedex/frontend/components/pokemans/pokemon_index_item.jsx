import React from 'react';
import { Link } from 'react-router-dom';

export default class PokemonIndexItem extends React.Component {
  render() {
    let linkUrl = `/pokemon/${this.props.pokemon.id}`;
    
    // use Link instead of <a href...> tags because it is more robust, ie it
    // works even if we use BrowserRouter rather than HashRouter
    return (
      <div key={this.key}>
        <Link to={linkUrl} >
          <li>
            {this.props.pokemon.name}
            <br />
            <img src={this.props.pokemon.image_url} height="60" />
          </li>
        </Link>
        <br />
      </div>
    )
  }  
}