// Render elements to UI
import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.getOutput = this.getOutput.bind();
  }

  getOutput = () => {
    const tasks = this.props.tasks;
    if (tasks.length <= 0) {
      return <p className="center"> No tasks</p>;
    }

    return tasks.map((task) => (
      <li key={task.id}>
        {task.text}{' '}
        <div className="icons">
          <i
            data-id={task.id}
            onClick={this.props.deleteTask}
            className="fa-solid fa-trash"
          ></i>

          <i
            data-id={task.id}
            onClick={this.props.editTask}
            className="fa-solid fa-pen-to-square"
          ></i>
        </div>
      </li>
    ));
  };

  render() {
    return <ul>{this.getOutput()}</ul>;
  }
}

export { Overview };
