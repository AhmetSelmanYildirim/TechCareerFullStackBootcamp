import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

// Bir TodoContext oluşturuluyor ve createContext kullanılarak bir context oluşturuluyor.
export const TodoContext = createContext(null);

// TodoProvider adında bir bileşen oluşturuluyor.
export const TodoProvider = ({ children }: { children: any }) => {
  // todoList adında bir state oluşturuluyor.
  const [todoList, setTodoList] = useState([{}]);

  // Sunucudan todoları getirmek için bir fonksiyon.
  const getTodos = async () => {
    // Axios kullanılarak sunucudan veriler alınıyor ve set ediliyor
    const { data } = await axios.get("http://localhost:4000/api/todo");
    setTodoList(data);
  };

  // Component yüklendiğinde bir kez çağrılan useEffect, getTodos fonksiyonunu çalıştırıyor.
  useEffect(() => {
    getTodos();
  }, []);

  // Bir todo'nun güncellenmesini sağlayan fonksiyon.
  const onUpdateTodo = (updatedTodo) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) =>
        todo.id === updatedTodo.id ? { ...updatedTodo } : todo
      );
    });
  };

  // Bir todo'nun silinmesini sağlayan fonksiyon.
  const onDeleteTodo = (id) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo) => todo.id !== id);
    });
  };

  // Tamamlanmış todoları silen fonksiyon.
  const deleteDoneTasks = async () => {
    axios
      .delete(`http://localhost:4000/api/todo/delete/completed`)
      .then(async (response) => response.status === 202 && getTodos());
  };

  // Tüm todoları silen fonksiyon.
  const deleteAllTasks = () => {
    axios
      .delete(`http://localhost:4000/api/todo/delete/all`)
      .then(async (response) => response.status === 202 && (await getTodos()));
  };

  // Value adında bir obje oluşturuluyor ve bu obje, context'te paylaşılacak fonksiyonları ve state'i içeriyor.
  const value: any = {
    todoList,
    setTodoList,
    getTodos,
    onUpdateTodo,
    onDeleteTodo,
    deleteDoneTasks,
    deleteAllTasks,
  };

  // TodoContext.Provider ile oluşturulan context değeri child bileşenlere iletiliyor.
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
