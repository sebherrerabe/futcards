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
randomizeDecks(); // randomize the decks for the players before the app is loaded

const App = () => {
  const [deckPlayer1, setdeckPlayer1] = useState([...players1]); // we initialize the state of the deck of player 1
  const [deckPlayer2, setdeckPlayer2] = useState([...players2]); // we initialize the state of the deck of player 2

  useEffect(() => { // each time the state changes, we update the decks
    setdeckPlayer1(deckPlayer1);
    setdeckPlayer2(deckPlayer2);
  }, [deckPlayer1, deckPlayer2]);

  const player1Wins = () => { // player 1 wins
    let temp1 = deckPlayer1;
    let temp2 = deckPlayer2;
    temp1.push(deckPlayer1[0]); // add the first card of player 1 to the end of the deck
    temp1.push(deckPlayer2[0]); // add the first card of player 2 to the end of the deck
    temp1.shift(); // remove the first card of player 1
    temp2.shift(); // remove the first card of player 2
    setdeckPlayer1([...temp1]); // update the state of deck player 1
    setdeckPlayer2([...temp2]); // update the state of deck player 2
    console.log("player 1 wins");
  };

  const player2Wins = () => { // player 2 wins
    let temp1 = deckPlayer1;
    let temp2 = deckPlayer2;
    temp2.push(deckPlayer2[0]); // add the first card of player 2 to the end of the deck
    temp2.push(deckPlayer1[0]); // add the first card of player 1 to the end of the deck
    temp1.shift(); // remove the first card of player 1
    temp2.shift(); // remove the first card of player 2
    setdeckPlayer1([...temp1]); // update the state of deck player 1
    setdeckPlayer2([...temp2]); // update the state of deck player 2
    console.log("player 2 wins");
  };

  const handleClick = (data) => {
    console.log(data); // shows attribute to be compared
    switch (data) { // switch statement to compare the attributes
      case "rating":
        if (deckPlayer1[0].rating > deckPlayer2[0].rating) {
          player1Wins();
        } else if (deckPlayer1[0].rating < deckPlayer2[0].rating) {
          player2Wins();
        } else {
          console.log("draw");
        }
        break;
      case "pace":
        if (deckPlayer1[0].pace > deckPlayer2[0].pace) {
          player1Wins();
        } else if (deckPlayer1[0].pace < deckPlayer2[0].pace) {
          player2Wins();
        } else {
          console.log("draw");
        }
        break;
      case "shooting":
        if (deckPlayer1[0].shooting > deckPlayer2[0].shooting) {
          player1Wins();
        } else if (deckPlayer1[0].shooting < deckPlayer2[0].shooting) {
          player2Wins();
        } else {
          console.log("draw");
        }
        break;
      case "passing":
        if (deckPlayer1[0].passing > deckPlayer2[0].passing) {
          player1Wins();
        } else if (deckPlayer1[0].passing < deckPlayer2[0].passing) {
          player2Wins();
        } else {
          console.log("draw");
        }
        break;
      case "dribbling":
        if (deckPlayer1[0].dribbling > deckPlayer2[0].dribbling) {
          player1Wins();
        } else if (deckPlayer1[0].dribbling < deckPlayer2[0].dribbling) {
          player2Wins();
        } else {
          console.log("draw");
        }
        break;
      case "defense":
        if (deckPlayer1[0].defense > deckPlayer2[0].defense) {
          player1Wins();
        } else if (deckPlayer1[0].defense < deckPlayer2[0].defense) {
          player2Wins();
        } else {
          console.log("draw");
        }
        break;
      case "physical":
        if (deckPlayer1[0].physical > deckPlayer2[0].physical) {
          player1Wins();
        } else if (deckPlayer1[0].physical < deckPlayer2[0].physical) {
          player2Wins();
        } else {
          console.log("draw");
        }
    }
  };

  return (
    <>
      <p>Player 1 cards: {deckPlayer1.length}/60</p>
      <p>Player 2 cards: {deckPlayer2.length}/60</p>
      <div className="main-container">
        <Player
          deckPlayer={deckPlayer1}
          number={1}
          key={1}
          handleClick={handleClick}
        />
        <Player
          deckPlayer={deckPlayer2}
          number={2}
          key={2}
          handleClick={handleClick}
        />
      </div>
    </>
  );
};

export default App;
