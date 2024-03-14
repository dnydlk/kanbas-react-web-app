import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

function TodoItem({ todo }: { todo: { id: string; title: string } }) {
  const dispatch = useDispatch();

  return (
    <li key={todo.id} className="list-group-item d-flex align-items-center">
      <div className="fs-5 me-auto">{todo.title}</div>

      <button
        onClick={() => dispatch(setTodo(todo))}
        className="btn btn-primary m-1">
        Edit
      </button>
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="btn btn-danger m-1">
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
