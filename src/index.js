/*
TODOS:
Change/Add Title, Description and Metadata to the game.
Change style `src/style.scss` and add your own color palette.
Add a button to reload a game after a loss.
Make it possible to “select skill level” to determine the size of the grid and the number of mines.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Board from './component/Board';
import './style.scss';

class Game extends React.Component {
  state = {
    height: 8,
    width: 8,
    mines: 10
  };

  render() {
    const { height, width, mines } = this.state;
    return (
      <div className="game">
        <Board height={height} width={width} mines={mines} />
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));