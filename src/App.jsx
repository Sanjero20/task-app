import React, { Component } from 'react';
import { Overview } from './components/Overview';
import uniqid from 'uniqid';

import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.deleteTask = this.deleteTask.bind();
    this.editTask = this.editTask.bind();

    this.state = {
      task: {
        text: '',
        id: uniqid(),
      },
      tasks: [],
    };
  }

  getIndex(event) {
    const index = this.state.tasks.findIndex((task) => {
      return task.id == event.target.dataset.id;
    });

    return index;
  }

  deleteTask = (e) => {
    const tasks = this.state.tasks;
    const index = this.getIndex(e);

    tasks.splice(index, 1);

    this.setState({
      tasks: tasks,
    });
  };

  editTask = (e) => {
    const tasks = this.state.tasks;
    const index = this.getIndex(e);

    let answer = prompt('Edit Task');

    if (answer == null || answer.length <= 0) {
      return;
    }

    tasks[index].text = answer;

    this.setState({
      tasks: tasks,
    });
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

    if (this.state.task.text.trim() == '') {
      alert('Must not be empty, Try Again!');
      return;
    }

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
          editTask={this.editTask}
        ></Overview>
      </div>
    );
  }
}

export default App;
