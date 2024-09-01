import { useState } from "react";
import { TodoInput } from "./TodoInput";

function Todo() {
  const [todosList, setTodosList] = useState(["Learn React", "learn Redux"]);
  return (
    <div>
      <TodoInput />
      {todosList.map((e) => (
        <div>{e}</div>
      ))}
    </div>
  );
}
export { Todo };
