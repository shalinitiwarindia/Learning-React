import { useState } from "react";

export const TodoInput = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          //   console.log(e.target.value);
          setText(e.target.value);
        }}
        type="text"
        placeholder="Enter Todo"
      />
      <button>Add Todo</button>
      {text}
    </div>
  );
};

