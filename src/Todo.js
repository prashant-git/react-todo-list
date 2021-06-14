import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Todo.css";

function Todo({ todo, toggleComplete }) {
  const toggleCompleted = (evt) => {
    toggleComplete(evt.target.id);
  };

  return (
    <div className="Todo">
      <li
        onClick={toggleCompleted}
        id={todo.id}
        className={todo.completed ? "Todo-task completed" : "Todo-task"}
      >
        {todo.task}
      </li>
      <button>
        <i id={todo.id} className="fas fa-trash" />
      </button>
    </div>
  );
}

export default Todo;
