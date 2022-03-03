import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import { Players } from "./Players";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = Players[0];
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <Card
          player={this.state}
        />
      </div>
    );
  }
}

export default App;
