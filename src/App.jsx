import React, { Component } from 'react';
import { Overview } from './components/Overview';
import uniqid from 'uniqid';

import './App.css';

const randomTasks = [
  {
    text: 'Do the laundry',
    id: uniqid(),
  },
  {
    text: 'Study ReactJS',
    id: uniqid(),
  },
];

export class App extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind();

    this.state = {
      task: {
        text: '',
        id: uniqid(),
      },
      tasks: [...randomTasks],
    };
  }

  deleteTask = (e) => {
    const connectedID = e.target.dataset.id;
    const tasks = this.state.tasks;

    const index = tasks.findIndex((task) => {
      return task.id == connectedID;
    });

    tasks.splice(index, 1);

    this.setState({
      tasks: tasks,
    });

    console.log(index);
  };

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

    this.setState({
      tasks: [...this.state.tasks, this.state.task],
      task: {
        text: '',
        id: uniqid(),
      },
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addTask}>
          <label htmlFor="task">Task</label>
          <fieldset>
            <input
              type="text"
              id="task"
              autoComplete="off"
              value={this.state.task.text}
              onChange={this.changeValue}
            />
            <button onClick={this.addTask}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </fieldset>
        </form>

        <Overview
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
        ></Overview>
      </div>
    );
  }
}

export default App;
