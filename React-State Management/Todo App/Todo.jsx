import { useState } from "react";
import { TodoInput } from "./TodoInput";

export const Todo = () => {
  const [todosList, setTodosList] = useState([]);
  const getData = (todo) => {
    setTodosList([...todosList, todo]);
  };
  return (
    <div>
      <TodoInput getData={getData} />
      {todosList.map((e) => (
        <div>{e}</div>
      ))}
    </div>
  );
};
