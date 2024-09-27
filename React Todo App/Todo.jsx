import React, { useState } from 'react';
import TodoList from './TodoList';

const Todo = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { title: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTaskStatus = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
        <h1>Todo App</h1>
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <TodoList tasks={tasks} toggleTaskStatus={toggleTaskStatus} />
    </div>
  );
};

export default Todo;
