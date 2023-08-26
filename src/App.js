import "./App.css";
import Register from "./Register";
import Login from "./Login";
import TaskList from "./Tasklist.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/tasklist" element={<TaskList />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
