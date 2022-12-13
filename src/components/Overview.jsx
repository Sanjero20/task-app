// Render elements to UI
import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tasks = this.props.tasks;

    return (
      <div>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </div>
    );
  }
}

export { Overview };
