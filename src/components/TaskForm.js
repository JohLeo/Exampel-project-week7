import React from "react";

export const TaskForm = ({ newTodo, onNewToDoChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h1>Welcome to todo app! Type new task below.</h1>
      <textarea value={newTodo} onChange={onNewToDoChange} />
      <button type="submit">Submit Form!</button>
    </form>
  )
}