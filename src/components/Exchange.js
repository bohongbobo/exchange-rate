import React, { Component } from "react";
import { getExchange, changeAmount1 } from "../actions/actions";
import { connect } from "react-redux";

class Exchange extends Component {
  handleChange = e => {};

  setCurrency1 = e => {
    // this.setState({
    //   c1: e.target.value
    // });
  };

  setCurrency2 = e => {};

  //   Swich = () => {
  //     this.setState({
  //       c1: this.state.c2,
  //       c2: this.state.c1
  //     });
  //   };

  componentDidMount() {
    this.props.getExchange();
  }

  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevProps !== this.props) {
      this.props.getExchange();
    }
  }

  render() {
    return (
      <div>
        <select onChange={this.setCurrency1} id="currency-one">
          <option value="USD">{this.props.currency.c1}</option>
          <option value="CNY">{this.props.currency.c2}</option>
        </select>
        <input
          type="number"
          placeholder="number"
          value={this.props.currency.amount1}
          onChange={this.props.changeAmount1}
        />
        <div className="swap-rate-container">
          <button className="btn" id="swap" onClick={this.Swich}>
            Swap
          </button>
          <div className="rate" id="rate"></div>
        </div>
        <select onChange={this.setCurrency2} id="currency-one">
          <option value="CNY">{this.props.currency.c2}</option>
          <option value="USD">{this.props.currency.c1}</option>
        </select>

        <input
          type="number"
          placeholder="0"
          value={this.props.currency.amount2}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currency: state.currency
});
export default connect(mapStateToProps, { getExchange, changeAmount1 })(
  Exchange
);
