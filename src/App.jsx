import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";
export default function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <>
      <div className="app">
        <Header />
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <ShowTask taskList={taskList} setTaskList={setTaskList} />
      </div>
    </>
  );
}
