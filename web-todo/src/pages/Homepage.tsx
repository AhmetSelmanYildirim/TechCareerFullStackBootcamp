import React from "react";
import Input from "../components/Input";
import TodoList from "../components/TodoList";

function Homepage() {
  return (
    <div style={{ width: "80%" }}>
      <Input></Input>
      <TodoList></TodoList>
    </div>
  );
}

export default Homepage;
