import React, { Component } from "react";
import money from "./money.png";
import "./App.css";
import Exchange from "./Exchange";

class App extends Component {
  state = {
    currency: ""
  };

  render() {
    return (
      <div className="App">
        <img src={money} alt="img" />
        <h1>Exchange Rate Calculator</h1>
        <p>Choose the currency and the amounts to get the exchange rate</p>
        <Exchange />
      </div>
    );
  }
}

export default App;
