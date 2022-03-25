import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Player from "./components/Player";
import Players from "./data/players.json";

let players1 = [];
let players2 = [];

const randomizeDecks = () => {
  let players = [...Players];
  while (players1.length < 30) {
    let randomCard = Math.floor(Math.random() * players.length);
    players1.push(players[randomCard]);
    players.splice(randomCard, 1);
  }
  while (players2.length < 30) {
    let randomCard = Math.floor(Math.random() * players.length);
    players2.push(players[randomCard]);
    players.splice(randomCard, 1);
  }
};
randomizeDecks(); // randomize the decks for the players

const App = () => {
  const [deckPlayer1, setdeckPlayer1] = useState([...players1]);
  const [deckPlayer2, setdeckPlayer2] = useState([...players2]);

  useEffect(() => {
    setdeckPlayer1(deckPlayer1);
    setdeckPlayer2(deckPlayer2);
  }, [deckPlayer1, deckPlayer2]);

  const player1Wins = () => {
    let temp1 = deckPlayer1;
    let temp2 = deckPlayer2;
    temp1.push(deckPlayer1[0]);
    temp1.push(deckPlayer2[0]);
    temp1.shift();
    temp2.shift();
    setdeckPlayer1([...temp1]);
    setdeckPlayer2([...temp2]);
  };

  const player2Wins = () => {
    let temp1 = deckPlayer1;
    let temp2 = deckPlayer2;
    temp2.push(deckPlayer2[0]);
    temp2.push(deckPlayer1[0]);
    temp1.shift();
    temp2.shift();
    setdeckPlayer1([...temp1]);
    setdeckPlayer2([...temp2]);
  };

  return (
    <>
      <button onClick={player1Wins}>Player 1 wins</button>
      <button onClick={player2Wins}>Player 2 wins</button>
      <div className="main-container">
        <Player deckPlayer={deckPlayer1} number={1} key={1} />
        <Player deckPlayer={deckPlayer2} number={2} key={2} />
      </div>
    </>
  );
};

export default App;
