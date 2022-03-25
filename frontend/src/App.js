import React, { useState } from "react";
import "./App.css";
import Player from "./components/Player";
import Players from "./data/players.json";

const App = () => {
  console.log("App rendered");

  // initialize game state
  const [stat, setStat] = useState("");
  const [player1Deck, setPlayer1Deck] = useState([]);
  const [player2Deck, setPlayer2Deck] = useState([]);

  // shuffle decks
  const shuffleDecks = () => {
    let deck = [...Players]; // create a deck of cards with all the players in it
    while (player1Deck.length < 30) {
      let randomCard = Math.floor(Math.random() * deck.length); // get a random card from the full deck
      player1Deck.push(deck[randomCard]); // add the card to the first deck
      setPlayer1Deck(player1Deck);
      deck.splice(randomCard, 1); // remove the card from the full deck
    }
    while (player2Deck.length < 30) {
      let randomCard = Math.floor(Math.random() * deck.length); // get a random card from the deck
      player2Deck.push(deck[randomCard]); // add the card to the second deck
      setPlayer2Deck(player2Deck); 
      deck.splice(randomCard, 1); // remove the card from the deck
    }
  };

  shuffleDecks();

  const removeDeck1 = () => {
    player1Deck.shift();
    console.log(player1Deck);
    setPlayer1Deck(player1Deck);
    console.log(player1Deck);
  };

  const removeDeck2 = () => {
    player2Deck.shift();
    console.log(player2Deck);
    setPlayer2Deck(player2Deck);
    console.log(player2Deck);
  };

  // click handler
  const handleClick = (property) => {
    setStat(property);
    console.log(stat);
    if (player1Deck[0][property] > player2Deck[0][property]) {
      console.log("Player 1 wins");
      player1Deck.push(player1Deck[0]); // Pushes own card to the bottom of our deck
      player1Deck.push(player2Deck[0]); // Pushes opponent card won to the bottom of our deck
      player1Deck.shift(); // Removes our card from the top of our deck
      player2Deck.shift(); // Removes card won from the top of the opponent's deck
    } else if (player1Deck[0][property] < player2Deck[0][property]) {
      console.log("Player 2 wins");
      player2Deck.push(player2Deck[0]); // Pushes own card to the bottom of our deck
      player2Deck.push(player1Deck[0]); // Pushes opponent card won to the bottom of our deck
      player2Deck.shift(); // Removes our card from the top of our deck
      player1Deck.shift(); // Removes card won from the top of the opponent's deck
    }
    setPlayer1Deck(player1Deck);
    setPlayer2Deck(player2Deck);
  };

  return (
    <div>
      <h1>Futcards</h1>
      <p>{stat}</p>
      <div className="main-container">
        <Player
          deckPlayer={player1Deck}
          removeDeck={removeDeck1}
          number={1}
          key={player1Deck[0].id}
          playerClick={handleClick}
        />
        <Player
          deckPlayer={player2Deck}
          removeDeck={removeDeck2}
          number={2}
          key={player2Deck[0].id}
          playerClick={handleClick}
        />
      </div>
    </div>
  );
};

export default App;
