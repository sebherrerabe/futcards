import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import players from "./data/players.json"

let Players = []
players.forEach(player => {
  Players.push(player)
});

class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.onClick()}>Cambiar jugador</button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = Players[0];
  }

  handleClick() {
    this.setState(Players[this.state.id]);
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <Card player={this.state} />
        <Button onClick={() => this.handleClick()} />
      </div>
    );
  }
}

export default App;
