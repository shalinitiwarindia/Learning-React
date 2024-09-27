import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleTaskStatus }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          toggleTaskStatus={() => toggleTaskStatus(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
