import React from "react";
import Input from "../components/Input";
import TodoList from "../components/TodoList";

function Homepage() {
  return (
    <div style={{ width: "70%" }}>
      <Input></Input>
      <TodoList></TodoList>
    </div>
  );
}

export default Homepage;
