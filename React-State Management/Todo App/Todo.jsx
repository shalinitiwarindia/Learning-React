import { nanoid } from "nanoid";
import { useState } from "react";
import { TodoData } from "./TodoData";
import { TodoInput } from "./TodoInput";

export const Todo = () => {
  const [todosList, setTodosList] = useState([]);
  const getData = (todo) => {
    const payload = {
      title: todo,
      status: true,
      id: nanoid(5),
    };
    setTodosList([...todosList, payload]);
  };
  const handleStatus = (id) => {
    setTodosList([
      ...todosList.map((e) => (e.id === id ? { ...e, status: !e.status } : e)),
    ]);
  };
  return (
    <div>
      <TodoInput getData={getData} />
      {todosList.map((e) => (
        <TodoData handleStatus={handleStatus} todo={e}></TodoData>
      ))}
    </div>
  );
};
