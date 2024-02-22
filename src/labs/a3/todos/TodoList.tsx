import TodoItem from "./TodoItem";
import todos from "./todos.json";
const TodoList = () => {
  return (
    <>
      <h3>Todo List</h3>
      <ul className="list-group">
        {todos.map((each) => {
          return <TodoItem todo={each} />;
        })}
      </ul>
    </>
  );
};
export default TodoList;
