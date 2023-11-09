import React, { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "../context/TodoContext";

function TodoList() {
  const { todoList } = useContext(TodoContext);
  const statusButtonStyle = {
    backgroundColor: "blue",
    padding: "10px",
    width: "25%",
    cursor: "pointer",
    borderRadius: "6px",
  };
  const deleteButtonStyle = {
    backgroundColor: "red",
    padding: "10px",
    width: "40%",
    cursor: "pointer",
    borderRadius: "6px",
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <h2>TodoList</h2>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div style={statusButtonStyle}>All</div>
        <div style={statusButtonStyle}>Done</div>
        <div style={statusButtonStyle}>Todo</div>
      </div>
      {todoList.map((todo, index) => (
        <Todo key={todo.title + index} todo={todo}></Todo>
      ))}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <div style={deleteButtonStyle}>Delete done tasks</div>
        <div style={deleteButtonStyle}>Delete all tasks</div>
      </div>
    </div>
  );
}

export default TodoList;
