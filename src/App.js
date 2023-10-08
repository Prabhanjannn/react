import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      result: ""
    };
  }

  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };

  calculate = () => {
    try {
      const result = eval(this.state.input);
      this.setState({ result });
    } catch (error) {
      this.setState({ result: "Error" });
    }
  };

  clear = () => {
    this.setState({ input: "", result: "" });
  };

  render() {
    return (
      <div>
        <h2>Arithmetic Calculator</h2>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleInput}
          placeholder="Enter expression"
        />
        <br />
        <button onClick={this.calculate}>Calculate</button>
        <button onClick={this.clear}>Clear</button>
        <div>Result: {this.state.result}</div>
      </div>
    );
  }
}

export default Calculator;
