import { useDispatch, useSelector } from "react-redux";
import { LabState } from "../../../store";
import { addTodo, setTodo, updateTodo } from "./todosReducer";

function TodoForm() {
  const { todo } = useSelector((state: LabState) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex align-items-center">
      <input
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        className="form-control m-1"
      />
      <button
        onClick={() => dispatch(updateTodo(todo))}
        className="btn btn-warning m-1">
        Update
      </button>
      <button
        onClick={() => dispatch(addTodo(todo))}
        className="btn btn-success m-1">
        Add
      </button>
    </li>
  );
}

export default TodoForm;
