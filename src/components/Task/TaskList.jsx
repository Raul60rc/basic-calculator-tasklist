import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      currentTask: ''
    }
  }

  handleInput = (e) => {
    this.setState({currentTask: e.target.value});
  }

  addTask = () => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, this.state.currentTask],
      currentTask: ''
    }));
  }

  deleteTask = (index) => {
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({tasks});
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.currentTask} onChange={this.handleInput} placeholder="New Task"/>
        <button onClick={this.addTask}>Add Task</button>
        {this.state.tasks.map((task, index) => 
          <Task key={index} task={task} onDelete={() => this.deleteTask(index)}/>
        )}
      </div>
    )
  }
}

export default TaskList;
