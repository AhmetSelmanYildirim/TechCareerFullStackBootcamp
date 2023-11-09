import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </TodoProvider>
  );
}

export default App;
