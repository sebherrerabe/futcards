import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Players from "./data/players.json";

let players = [];
Players.forEach((player) => {
  players.push(player);
});

const App = () => {
  return (
    <div>
      {players.map((player) => (
        <Card player={player} />
      ))}
    </div>
  );
};

export default App;
