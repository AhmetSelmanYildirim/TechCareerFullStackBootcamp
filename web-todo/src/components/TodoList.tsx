import React, { useContext, useState } from "react";
import Todo from "./Todo";
import { TodoContext } from "../context/TodoContext";
import axios from "axios";

function TodoList() {
  const { todoList, setTodoList, getTodos } = useContext(TodoContext);
  const [status, setStatus] = useState("all");

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

  const deleteDoneTasks = async () => {
    axios
      .delete(`http://localhost:4000/api/todo/delete/completed`)
      .then((response) => response.status === 202 && getTodos());
  };
  const deleteAllTasks = () => {
    axios
      .delete(`http://localhost:4000/api/todo/delete/all`)
      .then((response) => response.status === 202 && setTodoList([{}]));
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
        <div onClick={() => setStatus("all")} style={statusButtonStyle}>
          All
        </div>
        <div onClick={() => setStatus("done")} style={statusButtonStyle}>
          Done
        </div>
        <div onClick={() => setStatus("todo")} style={statusButtonStyle}>
          Todo
        </div>
      </div>
      {todoList.length > 0 ? (
        status === "all" ? (
          todoList.map((todo, index) => (
            <Todo key={todo.title + index} todo={todo}></Todo>
          ))
        ) : status === "done" ? (
          todoList
            .filter((todo) => todo.completed)
            .map((todo, index) => (
              <Todo key={todo.title + index} todo={todo}></Todo>
            ))
        ) : (
          todoList
            .filter((todo) => !todo.completed)
            .map((todo, index) => (
              <Todo key={todo.title + index} todo={todo}></Todo>
            ))
        )
      ) : (
        <div>Todo list is empty</div>
      )}

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <div style={deleteButtonStyle} onClick={() => deleteDoneTasks()}>
          Delete done tasks
        </div>
        <div style={deleteButtonStyle} onClick={() => deleteAllTasks()}>
          Delete all tasks
        </div>
      </div>
    </div>
  );
}

export default TodoList;
