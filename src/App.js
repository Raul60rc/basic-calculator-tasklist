import React, { Component } from "react";
import "./components/calculator.css";
import Calculator from "./components/Calculator";
import TaskList from "./components/Task/TaskList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
        <TaskList />
      </div>
    );
  }
}

export default App;
