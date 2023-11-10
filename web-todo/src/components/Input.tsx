import axios from "axios";
import React, { useState } from "react";
function Input() {
  const [todo, setTodo] = useState("");

  const addNewTodo = async () => {
    if (todo) {
      await axios.post("http://localhost:4000/api/todo", {
        title: todo,
        completed: false,
      });
      window.location.reload();
    } else {
      alert("task cannot be empty!!!");
    }
  };

  return (
    <div>
      <h2>TodoInput</h2>
      <div style={{ border: "1px #000 solid", padding: 30 }}>
        <div style={{ display: "flex", width: "100%" }}>
          <svg style={{ width: 30 }} fill={"blue"} viewBox="0 0 448 512">
            <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
          </svg>
          <input
            style={{ width: "100%" }}
            type="text"
            placeholder="New Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <div
          onClick={() => addNewTodo()}
          style={{
            width: "100%",
            marginTop: 30,
            backgroundColor: "blue",
            padding: "10px 0 10px 0",
            cursor: "pointer",
            borderRadius: "6px",
          }}
        >
          Add New Task
        </div>
      </div>
    </div>
  );
}

export default Input;
