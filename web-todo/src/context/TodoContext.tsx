import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const TodoContext = createContext(null);

export const TodoProvider = ({ children }: { children: any }) => {
  const [todoList, setTodoList] = useState([{}]);

  const getTodos = async () => {
    const { data } = await axios.get("http://localhost:4000/api/todo");
    setTodoList(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const value: any = {
    todoList,
    setTodoList,
    getTodos,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
