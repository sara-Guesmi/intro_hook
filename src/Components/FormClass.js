import React, { Component } from "react";
class FormClass extends Component {
  state = {
    name: "no name",
    count: 0,
    x: 2,
  };

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  // componentDidMount() {
  //   alert("mounted");
  // }
  // componentDidUpdate() {
  //   alert("updated");
  // }
  // componentWillUnmount() {}

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleName}
          placeholder={this.state.name}
        />
        <h3>{this.state.name}</h3>
      </div>
    );
  }
}

export default FormClass;
