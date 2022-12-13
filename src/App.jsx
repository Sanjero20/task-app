import React, { Component } from 'react';
import { Overview } from './components/Overview';
import uniqid from 'uniqid';

import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        text: '',
        id: uniqid(),
      },
      tasks: [],
    };
  }

  changeValue = (event) => {
    this.setState({
      task: {
        text: event.target.value,
        id: this.state.task.id,
      },
    });
  };

  addTask = (event) => {
    event.preventDefault();

    const inputBox = document.getElementById('task');

    this.setState(
      {
        tasks: [...this.state.tasks, this.state.task],
        task: {
          text: '',
          id: uniqid(),
        },
      },
      () => {
        inputBox.value = '';
      }
    );
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
            value={this.state.task.text}
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
