import React, { useState } from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import uuid from "uuid";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: uuid(), task: "task 1", completed: false },
    { id: uuid(), task: "task 2", completed: true }
  ]);

  const update = (id, updtedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todosList = todos.map((todo) => (
    <Todo
      toggleComplete={toggleComplete}
      update={update}
      key={todo.id}
      todo={todo}
    />
  ));

  return (
    <div className="TodoList">
      <h1>
        Todo List <span>A simple React Todo List App</span>
      </h1>
      <ul>{todosList}</ul>
      <NewTodoForm createTodo={() => {}} />
    </div>
  );
}

export default TodoList;
