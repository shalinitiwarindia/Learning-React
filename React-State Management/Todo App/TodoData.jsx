export const TodoData = ({ todo, handleStatus }) => {
  return (
    <div>
      {/* <div>{todo.id}</div> */}
      {todo.title} - {todo.status ? "Done" : "Not Done"}
      <button onClick={() => handleStatus(todo.id)}>Toggle</button>
    </div>
  );
};
