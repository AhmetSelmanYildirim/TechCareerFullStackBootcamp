import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const TodoContext = createContext(null);

export const TodoProvider = ({ children }: { children: any }) => {
  const [todoList, setTodoList] = useState([{}]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:4000/api/todo");
      setTodoList(data);
    })();
  }, []);
  const value: any = {
    todoList,
    setTodoList,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
