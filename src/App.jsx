import React, { Component } from 'react';
import { Overview } from './components/Overview';

import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: '',
      tasks: [],
    };
  }

  changeValue = (event) => {
    this.setState({
      task: event.target.value,
    });
  };

  addTask = (event) => {
    event.preventDefault();

    // const inputBox = document.getElementById('task');

    this.setState({
      tasks: [...this.state.tasks, this.state.task],
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addTask}>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            id="task"
            autoComplete="off"
            value={this.state.task}
            onChange={this.changeValue}
          />
          <button onClick={this.addTask}>Add</button>
        </form>

        <Overview tasks={this.state.tasks}></Overview>
      </div>
    );
  }
}

export default App;
