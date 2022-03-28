import React from "react";
import Card from "./Card";

const Player = ({ deckPlayer, number, handleClick, turn }) => {
  let turnDisplay = <p>Opponent's turn</p>
  if (turn && number === 1) {
    turnDisplay = <p>Player's turn</p>
  }
  else if (!turn && number === 2) {
    turnDisplay = <p>AI turn</p>
  }

  return (
    <>
      <div className="player-container">
        <div className="player-container-header">
          <h1>Player {number} </h1>
          <p>Player 1 cards: {deckPlayer.length}/60</p>
          {turnDisplay}
        </div>
        <div className="player-container-body">
          {deckPlayer.map((player) => (
            <Card player={player} key={number * 100 + player.id} handleClick={ handleClick } number={number} turn={turn}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Player;
