import * as Minesweeper from './minesweeper';
import Tile from './tile';
import React, { Component } from 'react';
// rcc tab to create import and class

export default class board extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log("board");
    return (
      <div className="board">
        { this.props.board.grid.map((row, index) => {
          return (
            <div className="row" key={index}>
              { row.map((tile, idx) => {
                return (
                  <Tile 
                    key={idx} 
                    tile={tile} 
                    updateGame={this.props.updateGame}
                  /> 
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
