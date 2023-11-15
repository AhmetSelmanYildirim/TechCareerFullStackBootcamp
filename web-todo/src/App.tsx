import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    // TodoProvider bileşenini kullanarak bir context sağlıyor.
    <TodoProvider>
      {/* React Router'ın Routes bileşeni ile yönlendirme yapıyor. */}
      <Routes>
        {/* // Yönlendirme için "/" yolu belirliyor. */}
        <Route path="/">
          {/* Anasayfa bileşenini render ediyor. */}
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </TodoProvider>
  );
}

export default App;
