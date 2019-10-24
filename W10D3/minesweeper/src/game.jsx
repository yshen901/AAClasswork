import React from "react";
import * as Minesweeper from "./minesweeper.js";
import Board from './board';

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {board: new Minesweeper.Board(4, 1)};
    this.updateGame = this.updateGame.bind(this);
    window.state = this.state;
  }

  updateGame(tile, action) {
    // debugger
    if (action === "explore") {
      console.log("explore");
      tile.explore();
    }
    else if (action === "flag"){
      console.log("flagged");
      tile.toggleFlag();
    }

    //IF ANY OF AN OBJECTS INSTANCE VARIABLES CHANGE, MUST SETSTATE
    this.setState({board: this.state.board});
  }

  getModal() {
    let message;
    if (this.state.board.won())
      message = "You Won!";
    else if (this.state.board.lost())
      message = "You Died!";
    else
      return;

    console.log("modal");
    return (
      <div className="gameover">{message}</div>
    );
  }

  render() {
    

    
    return (
      <div id="game">
        {this.getModal()}
        <Board board={this.state.board} updateGame={this.updateGame}/>
      </div>
    );
  }
}