import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

function Todo() {
  const [todosList, setTodosList] = useState([]);
  const getData = (todo) => {
    setTodosList([...todosList, todo]);
  };
  return (
    <div>
      <TodoInput getData={getData} />
      {todosList.map((e) => (
        <TodoItem todo={e}></TodoItem>
      ))}
    </div>
  );
}
export { Todo };
