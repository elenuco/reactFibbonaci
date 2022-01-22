//import logo from './logo.svg';
import React from "react";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previous1: 1,
      previous2: 0,
    };
  }
  clickIncrease = (e) => {
    let a = this.state.previous1 + this.state.previous2;
    this.setState({
      previous1: a,
      previous2: this.state.previous1,
    });
  };
  clickDecrease = (e) => {
    this.setState({
      previous1: this.state.previous2,
      previous2: this.state.previous1 - this.state.previous2,
    });
  };
  render() {
    return (
      <div style={{ fontSize: "40px" }}>
        fibonacci Series
        <span>The current number is</span>
        <b>{this.state.previous1}</b>
        <button onClick={this.clickDecrease} style={{ fontSize: "40px" }}>
          -
        </button>
        <button onClick={this.clickIncrease} style={{ fontSize: "40px" }}>
          +
        </button>
      </div>
    );
  }
}

export default App;