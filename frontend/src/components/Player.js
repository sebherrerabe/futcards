import React from "react";
import Card from "./Card";

const Player = ({ deckPlayer, number }) => {
  return (
    <div className="player-container">
      <div className="player-container-header">
        <h1>Player {number} </h1>
      </div>
      <div className="player-container-body">
        {deckPlayer.map((player) => (
          <Card player={player} key={player.id} />
        ))}
      </div>
    </div>
  );
};

export default Player;
