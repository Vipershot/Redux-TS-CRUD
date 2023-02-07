import TaskList from "./components/UI/organisms/TaskList/TaskList";
import TaskForm from "./components/UI/organisms/TaskForm/TaskForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/style/App.css";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
