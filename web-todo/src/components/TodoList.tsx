import React, { useContext, useState } from "react";
import Todo from "./Todo";
import { TodoContext } from "../context/TodoContext";

function TodoList() {
  const { todoList, deleteDoneTasks, deleteAllTasks } = useContext(TodoContext);
  const [status, setStatus] = useState("all");

  // Stil objeleri
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
      {/* Durum butonları */}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        {/* Durumları filtrelemek için butonlar */}
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
      {/* Todo listesi */}
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

      {/* Görevleri silme butonları */}
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
