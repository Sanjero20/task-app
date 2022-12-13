// Render elements to UI
import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tasks = this.props.tasks;

    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}{' '}
            <i
              data-id={task.id}
              onClick={this.props.deleteTask}
              className="fa-solid fa-trash"
            ></i>
          </li>
        ))}
      </ul>
    );
  }
}

export { Overview };
