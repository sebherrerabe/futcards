import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Player from "./components/Player";
import Players from "./data/players.json";

let deckPlayer1 = [];
let deckPlayer2 = [];

const randomizeDecks = () => {
  let deck = Players;
  while (deckPlayer1.length < 30) {
    let randomCard = Math.floor(Math.random() * deck.length);
    deckPlayer1.push(deck[randomCard]);
    deck.splice(randomCard, 1);
  }
  while (deckPlayer2.length < 30) {
    let randomCard = Math.floor(Math.random() * deck.length);
    deckPlayer2.push(deck[randomCard]);
    deck.splice(randomCard, 1);
  }
};

const App = () => {
  randomizeDecks(); // randomize the decks for the players
  return (
    <div>
      <div className="main-container">
        <Player deckPlayer={deckPlayer1} number={1} key={1} />
        <Player deckPlayer={deckPlayer2} number={2} key={2} />
      </div>
    </div>
  );
};

export default App;
