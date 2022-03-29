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
  const [turn, setTurn] = useState(1); // we initialize the state of the turn to allow player 1 to play first

  useEffect(() => {
    // each time the state changes, we update the decks
    setdeckPlayer1(deckPlayer1);
    setdeckPlayer2(deckPlayer2);
  }, [deckPlayer1, deckPlayer2, turn]);

  const player1Wins = () => {
    // player 1 wins
    let temp1 = deckPlayer1;
    let temp2 = deckPlayer2;
    temp1.push(deckPlayer1[0]); // add the first card of player 1 to the end of the deck
    temp1.push(deckPlayer2[0]); // add the first card of player 2 to the end of the deck
    temp1.shift(); // remove the first card of player 1
    temp2.shift(); // remove the first card of player 2
    setdeckPlayer1([...temp1]); // update the state of deck player 1
    setdeckPlayer2([...temp2]); // update the state of deck player 2
    if (turn === 2) {
      setTurn(1); // change the turn
    }
    console.log("Player 1 wins");
  };

  const player2Wins = () => {
    // player 2 wins
    let temp1 = deckPlayer1;
    let temp2 = deckPlayer2;
    temp2.push(deckPlayer2[0]); // add the first card of player 2 to the end of the deck
    temp2.push(deckPlayer1[0]); // add the first card of player 1 to the end of the deck
    temp1.shift(); // remove the first card of player 1
    temp2.shift(); // remove the first card of player 2
    setdeckPlayer1([...temp1]); // update the state of deck player 1
    setdeckPlayer2([...temp2]); // update the state of deck player 2
    if (turn === 1) {
      setTurn(2); // change the turn
    }
    console.log("Player 2 wins");
  };

  const handleClick = (data) => {
    console.log(data); // shows attribute to be compared
    if (turn) {
      switch (
        data // switch statement to compare the attributes
      ) {
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
    } else {
      switch (
        data // switch statement to compare the attributes
      ) {
        case "rating":
          if (deckPlayer2[0].rating > deckPlayer1[0].rating) {
            player2Wins();
          } else if (deckPlayer2[0].rating < deckPlayer1[0].rating) {
            player1Wins();
          } else {
            console.log("draw");
          }
          break;
        case "pace":
          if (deckPlayer2[0].pace > deckPlayer1[0].pace) {
            player2Wins();
          } else if (deckPlayer2[0].pace < deckPlayer1[0].pace) {
            player1Wins();
          } else {
            console.log("draw");
          }
          break;
        case "shooting":
          if (deckPlayer2[0].shooting > deckPlayer1[0].shooting) {
            player2Wins();
          } else if (deckPlayer2[0].shooting < deckPlayer1[0].shooting) {
            player1Wins();
          } else {
            console.log("draw");
          }
          break;
        case "passing":
          if (deckPlayer2[0].passing > deckPlayer1[0].passing) {
            player2Wins();
          } else if (deckPlayer2[0].passing < deckPlayer1[0].passing) {
            player1Wins();
          } else {
            console.log("draw");
          }
          break;
        case "dribbling":
          if (deckPlayer2[0].dribbling > deckPlayer1[0].dribbling) {
            player2Wins();
          } else if (deckPlayer2[0].dribbling < deckPlayer1[0].dribbling) {
            player1Wins();
          } else {
            console.log("draw");
          }
          break;
        case "defense":
          if (deckPlayer2[0].defense > deckPlayer1[0].defense) {
            player2Wins();
          } else if (deckPlayer2[0].defense < deckPlayer1[0].defense) {
            player1Wins();
          } else {
            console.log("draw");
          }
          break;
        case "physical":
          if (deckPlayer2[0].physical > deckPlayer1[0].physical) {
            player2Wins();
          } else if (deckPlayer2[0].physical < deckPlayer1[0].physical) {
            player1Wins();
          } else {
            console.log("draw");
          }
      }
    }
  };

  if (turn === 2) {
    console.log("Player 2 plays");
    let attrib = "";
    switch (Math.floor(Math.random() * 6)) {
      case 0:
        attrib = "pace";
        break;
      case 1:
        attrib = "shooting";
        break;
      case 2:
        attrib = "passing";
        break;
      case 3:
        attrib = "dribbling";
        break;
      case 4:
        attrib = "defense";
        break;
      case 5:
        attrib = "physical";
    }
    handleClick(attrib);
  } else {
    console.log("Player 1 plays");
  }

  return (
    <>
      <div className="main-container">
        <Player
          key={1}
          number={1}
          deckPlayer={deckPlayer1}
          handleClick={handleClick}
          turn={turn}
        />
        <Player
          key={2}
          number={2}
          deckPlayer={deckPlayer2}
          handleClick={handleClick}
          turn={turn}
        />
      </div>
    </>
  );
};

export default App;
