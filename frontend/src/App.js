import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Players from "./data/players.json";


const App = () => {
  return (
    <div>
      <div className="main-container">
      {Players.map((player) => (
        <Card player={player} />
      ))}
      </div>
    </div>
  );
};

export default App;
