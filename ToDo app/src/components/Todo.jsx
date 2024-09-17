import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

function Todo() {
  const [todosList, setTodosList] = useState([]);
  const getData = (todo) => {
    setTodosList([...todosList, todo]);
  };
 
  );
}
export { Todo };
