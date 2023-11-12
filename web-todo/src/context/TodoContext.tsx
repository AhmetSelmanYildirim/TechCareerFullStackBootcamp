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

  const onUpdateTodo = (updatedTodo) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) =>
        todo.id === updatedTodo.id ? { ...updatedTodo } : todo
      );
    });
  };

  const onDeleteTodo = (id) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo) => todo.id !== id);
    });
  };

  const value: any = {
    todoList,
    setTodoList,
    getTodos,
    onUpdateTodo,
    onDeleteTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
