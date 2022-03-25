import React from "react";
import Card from "./Card";

const Player = ({ deckPlayer, removeDeck, number, playerClick }) => {
  console.log('Player rendered');
  console.log(deckPlayer);

  return (
    <div className="player-container">
      <div className="player-container-header">
        <h1>Player {number} </h1>
        <button onClick={() => removeDeck()}>Remove Player from Deck {number}</button>
      </div>
      <div className="player-container-body">
        {deckPlayer.map((player) => (
          <Card player={player} key={(number*100)+player.id} cardClick={playerClick} />
        ))}
      </div>
    </div>
  );
};

export default Player;
