import React from 'react';
import * as Minesweeper from './minesweeper';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  // can't use if/else in render return so do it in the helper function above

  getSymbol() {
    if (this.props.tile.flagged) 
      return "\uD83D\uDEA9";
    else if (this.props.tile.bombed) 
      return "\uD83D\uDCA3"; 
    else 
      return this.props.tile.adjacentBombCount(); //no break space
  }

  getClass() {
    if (this.props.tile.flagged) 
      return "tile flagged";
    else if (this.props.tile.bombed && this.props.tile.explored)
      return "tile explored bombed";
    else if (this.props.tile.explored)
      return "tile explored";
    else 
      return "tile";
  }

  handleClick(e) {
    if (e.altKey) {
      this.props.updateGame(this.props.tile, "flag");
      console.log(this.props.tile.flagged);
    } else {
      this.props.updateGame(this.props.tile, "explore");
    }
  }

  render() {
    // console.log("tile");
    return (
      <div onClick={(e) => {this.handleClick(e);}} className={this.getClass()}>
        <p>{this.getSymbol()}</p>
        
      </div>
    );
  }
}