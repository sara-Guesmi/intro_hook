import React, { Component } from "react";
class CounterClass extends Component {
  state = {
    count: 0,
    name: "mohamed",
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <h3>{this.state.count}</h3>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default CounterClass;
