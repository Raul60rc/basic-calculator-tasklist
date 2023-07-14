import React, { Component } from "react";
import "./calculator.css";
import ResultComponent from "./Result";
import KeyPadComponent from "./KeyPad";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  render() {
    return (
      <div className="calculator-body">
        <h1>Simple Calculator</h1>
        <ResultComponent result={this.state.result} />
        <KeyPadComponent onClick={this.onClick} />
      </div>
    );
  }
}

export default Calculator;
