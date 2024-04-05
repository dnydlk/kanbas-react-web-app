import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"

const API_BASE = process.env.REACT_APP_API_BASE

const WorkingWithArrays = () => {
  const TODOS_URL = `${API_BASE}/a5/todos`

  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  })

  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const [todos, setTodos] = useState<any[]>([])

  const fetchTodos = async () => {
    const response = await axios.get(TODOS_URL)
    setTodos(response.data)
  }
  const removeTodos = async (todo: any) => {
    const response = await axios.get(`${TODOS_URL}/${todo.id}/delete`)
    setTodos(response.data)
  }
  const createTodos = async () => {
    const response = await axios.get(`${TODOS_URL}/create`)
    setTodos(response.data)
  }
  const fetchTodoById = async (todo: any) => {
    const response = await axios.get(`${TODOS_URL}/${todo.id}`)
    setTodo(response.data)
  }
  const updateTodoById = async () => {
    const response = await axios.get(`${TODOS_URL}/${todo.id}/title/${todo.title}`)
    setTodos(response.data)
  }

  const postTodo = async () => {
    const response = await axios.post(TODOS_URL, todo)
    setTodos([...todos, response.data]) //! Use the todos in the todos state variable to append the new todo
  }

  const deleteTodoById = async (todo: any) => {
    try {
      const response = await axios.delete(`${TODOS_URL}/${todo.id}`)
      setTodos(todos.filter((t) => t.id !== todo.id))
    } catch (error: unknown) {
      console.error(error)
      const axiosError = error as AxiosError
      if (axiosError.response) {
        const errorMessage = (axiosError.response.data as { message?: string }).message
        setErrorMessage(errorMessage || "An unexpected error occurred")
      } else {
        setErrorMessage("An unexpected network error occurred when trying to delete the todo")
      }
    }
  }

  const updateTodo = async () => {
    try {
      const response = await axios.put(`${TODOS_URL}/${todo.id}`, todo)
      //! second argument is the updated todo that is being sent to the server
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)))
    } catch (error: unknown) {
      console.error(error)
      const axiosError = error as AxiosError
      if (axiosError.response) {
        const errorMessage = (axiosError.response.data as { message?: string }).message
        setErrorMessage(errorMessage || "An unexpected error occurred")
      } else {
        setErrorMessage("An unexpected network error occurred when trying to update the todo")
      }
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div id="working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>

      {/* //- Get todo */}
      <a href={TODOS_URL} className="btn btn-primary m-1">
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
      <a href={`${TODOS_URL}/${todo.id}`} className="btn btn-primary m-1">
        Get Todo by ID
      </a>

      {/* //- Filtering array items using a query string */}
      <h3>Filtering Array Item</h3>
      <a href={`${TODOS_URL}?completed=true`} className="btn btn-primary m-1">
        Get Completed Todos
      </a>

      {/* //- Creating new Items in an Array */}
      <h3>Creating new Items in an Array</h3>
      <a href={`${TODOS_URL}/create`} className="btn btn-primary m-1">
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
      <a href={`${TODOS_URL}/${todo.id}/delete`} className="btn btn-primary m-1">
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
      <a href={`${TODOS_URL}/${todo.id}/title/${todo.title}`} className="btn btn-primary m-1">
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
      <a href={`${TODOS_URL}/${todo.id}/completed/${todo.completed}`} className="btn btn-primary m-1">
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
      <a href={`${TODOS_URL}/${todo.id}/description/${todo.description}`} className="btn btn-primary m-1">
        Update Description to "{todo.description}"
      </a>
      <hr />
      {/* //- Fetching Array*/}
      {errorMessage && <div className="alert alert-danger m-1">{errorMessage}</div>}
      <input
        value={todo.id}
        type="text"
        className="form-control m-1"
        onChange={(e) => {
          setTodo({ ...todo, id: parseInt(e.target.value) })
        }}
      />
      <input
        value={todo.title}
        type="text"
        className="form-control m-1"
        onChange={(e) => {
          setTodo({ ...todo, title: e.target.value })
        }}
      />
      <textarea
        value={todo.description}
        typeof="text"
        className="form-control m-1"
        onChange={(e) => {
          setTodo({ ...todo, description: e.target.value })
        }}
      />
      <input
        value={todo.due}
        type="date"
        className="form-control m-1"
        onChange={(e) => {
          setTodo({ ...todo, due: e.target.value })
        }}
      />
      <label>
        <input
          type="checkbox"
          className="form-check-input m-1"
          checked={todo.completed}
          onChange={(e) => {
            setTodo({ ...todo, completed: e.target.checked })
          }}
        />
        Completed
      </label>
      <div className="d-grid">
        <button className="btn btn-primary m-1" onClick={() => postTodo()}>
          Post Todo
        </button>
        <button className="btn btn-secondary m-1" onClick={() => createTodos()}>
          Create Todo
        </button>
        {/* <button className="btn btn-success m-1" onClick={() => updateTodoById()}>
          Update Todo
        </button> */}
        <button className="btn btn-success m-1" onClick={() => updateTodo()}>
          Update Todo
        </button>
      </div>
      <ul className="list-group m-1">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                className="form-check-input m-1 ms-0 me-2"
                checked={todo.completed}
                onChange={(e) => {
                  setTodo({ ...todo, completed: e.target.checked })
                }}
              />
              <div className="me-3">{todo.title}</div>
              <div className="me-auto">{todo.description}</div>
              <div className="me-3">{todo.due}</div>
              {/* <button className="btn btn-danger ms-2" onClick={() => removeTodos(todo)}>
                Remove
              </button> */}
              <button className="btn btn-danger ms-2" onClick={() => deleteTodoById(todo)}>
                Delete
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
