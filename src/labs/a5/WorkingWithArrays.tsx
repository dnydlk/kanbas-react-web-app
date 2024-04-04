import axios from "axios"
import { useEffect, useState } from "react"

const WorkingWithArrays = () => {
  const API = "http://localhost:4000/a5/todos"

  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  })

  const [todos, setTodos] = useState<any[]>([])

  const fetchTodos = async () => {
    const response = await axios.get(API)
    setTodos(response.data)
  }
  const removeTodos = async (todo: any) => {
    const response = await axios.get(`${API}/${todo.id}/delete`)
    setTodos(response.data)
  }
  const createTodos = async () => {
    const response = await axios.get(`${API}/create`)
    setTodos(response.data)
  }
  const fetchTodoById = async (todo: any) => {
    const response = await axios.get(`${API}/${todo.id}`)
    setTodo(response.data)
  }
  const updateTodoById = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`)
    setTodos(response.data)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div id="working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>

      {/* //- Get todo */}
      <a href={API} className="btn btn-primary m-1">
        Get Todos
      </a>

      {/* //- Retrieving an Item from an Array by ID */}
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        type="number"
        value={todo.id}
        className="form-control m-1"
        onChange={(e) => {
          setTodo({ ...todo, id: parseInt(e.target.value) })
        }}
      />
      <a href={`${API}/${todo.id}`} className="btn btn-primary m-1">
        Get Todo by ID
      </a>

      {/* //- Filtering array items using a query string */}
      <h3>Filtering Array Item</h3>
      <a href={`${API}?completed=true`} className="btn btn-primary m-1">
        Get Completed Todos
      </a>

      {/* //- Creating new Items in an Array */}
      <h3>Creating new Items in an Array</h3>
      <a href={`${API}/create`} className="btn btn-primary m-1">
        Create Todo
      </a>
      {/* //- Deleting an array from an Array */}
      <h3>Deleting an array from an Array</h3>
      <input
        type="number"
        value={todo.id}
        className="form-control m-1"
        onChange={(e) => {
          setTodo({ ...todo, id: parseInt(e.target.value) })
        }}
      />
      <a href={`${API}/${todo.id}/delete`} className="btn btn-primary m-1">
        Delete Todo with id = {todo.id}
      </a>
      {/* //- Updating an Item's title in an array*/}
      <h3>Updating an Item's title in an array</h3>
      <label className="ms-1">Todo ID:</label>
      <input
        type="number"
        value={todo.id}
        className="form-control m-1 ms-3"
        onChange={(e) => {
          setTodo({ ...todo, id: parseInt(e.target.value) })
        }}
      />
      <label className="ms-1">Todo Title:</label>
      <input
        type="text"
        value={todo.title}
        className="form-control m-1 ms-3"
        onChange={(e) => {
          setTodo({ ...todo, title: e.target.value })
        }}
      />
      <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary m-1">
        Update Title to {todo.title}
      </a>
      {/* //- Updating an Item's complete status in an array*/}
      <h3>Updating an Item's complete status in an array</h3>
      <label className="ms-1">Todo ID:</label>
      <input
        type="number"
        value={todo.id}
        className="form-control m-1 ms-3"
        onChange={(e) => {
          setTodo({ ...todo, id: parseInt(e.target.value) })
        }}
      />
      <label className="ms-1">Todo Complete Status:</label>
      <select
        name="complete-status"
        className="form-select m-1 ms-3"
        id="completed"
        onChange={(e) =>
          setTodo({
            ...todo,
            completed: e.target.value === "true" ? true : false,
          })
        }>
        <option selected value="false">
          Incomplete
        </option>
        <option value="true">Complete</option>
      </select>
      <a href={`${API}/${todo.id}/completed/${todo.completed}`} className="btn btn-primary m-1">
        Update Complete Status
      </a>
      {/* //- Updating an Item's description in an array*/}
      <h3>Updating an Item's description in an array</h3>
      <input
        type="text"
        value={todo.description}
        className="form-control m-1"
        onChange={(e) => {
          setTodo({ ...todo, description: e.target.value })
        }}
      />
      <a href={`${API}/${todo.id}/description/${todo.description}`} className="btn btn-primary m-1">
        Update Description to "{todo.description}"
      </a>
      <hr />
      {/* //- Fetching Array*/}
      <input
        type="text"
        value={todo.id}
        className="form-control m-1"
        onChange={(e) => {
          setTodo({ ...todo, id: parseInt(e.target.value) })
        }}
      />
      <input
        type="text"
        value={todo.title}
        className="form-control m-1"
        onChange={(e) => {
          setTodo({ ...todo, title: e.target.value })
        }}
      />
      <div className="d-grid">
        <button className="btn btn-primary m-1" onClick={() => createTodos()}>
          Create Todo
        </button>
        <button className="btn btn-success m-1" onClick={() => updateTodoById()}>
          Update Todo
        </button>
      </div>
      <ul className="list-group m-1">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <div className="d-flex align-items-center">
              <div className="me-auto">{todo.title}</div>
              <button className="btn btn-danger ms-2" onClick={() => removeTodos(todo)}>
                Remove
              </button>
              <button className="btn btn-warning ms-2" onClick={() => fetchTodoById(todo)}>
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>

      <hr />
    </div>
  )
}
export default WorkingWithArrays
