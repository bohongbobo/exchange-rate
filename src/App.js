import React, { Component } from "react";
import money from "./money.png";
import "./App.css";
import Exchange from "./components/Exchange";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={money} alt="img" />
        <h1>Exchange Rate Calculator</h1>
        <p>Choose the currency and the amounts to get the exchange rate</p>
        <Provider store={store}>
          <Exchange />
        </Provider>
      </div>
    );
  }
}

export default App;
