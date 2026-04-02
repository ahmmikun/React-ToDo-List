import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";
export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});
  return (
    <>
      <div className="app">
        <Header />
        <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
        <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
      </div>
    </>
  );
}
