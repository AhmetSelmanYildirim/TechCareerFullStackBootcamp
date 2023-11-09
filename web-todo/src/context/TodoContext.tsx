import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const TodoContext = createContext(null);

export const TodoProvider = ({ children }: { children: any }) => {
  const value: any = {};

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
