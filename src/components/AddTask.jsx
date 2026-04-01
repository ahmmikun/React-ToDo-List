export default function AddTask() {
  return (
    <>
      <section className="addTask">
        <form action="">
            <input 
            type="text"
            name="task"
            autoComplete="off"
            placeholder="Add Task"
            maxLength={25} 
            />
            <button type="submit">Add</button>
        </form>
      </section>
    </>
  )
}