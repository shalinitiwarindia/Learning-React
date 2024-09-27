import React from 'react';

const TodoItem = ({ task, toggleTaskStatus }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.title}</span>
      <button onClick={toggleTaskStatus}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
    </li>
  );
};

export default TodoItem;
