import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { LabState, TodoType } from "../../../store";

function TodoList() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);
  return (
    <div>
      <h3>Todo List</h3>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default TodoList;
