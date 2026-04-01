import "./App.css"
import AddTask from "./components/AddTask"
import Header from "./components/Header"
import ShowTask from "./components/ShowTask"
export default function App () {
  return (
    <>
      <div className="app">
        <Header />
        <AddTask />
        <ShowTask />
      </div>
    </>  
    )
}