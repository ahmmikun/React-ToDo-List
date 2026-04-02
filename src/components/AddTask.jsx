export default function AddTask({ taskList, setTaskList, task, setTask }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      const date = new Date();
      const updatedTaskList = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: e.target.task.value,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()} `,
            }
          : todo,
      );
      setTaskList(updatedTaskList);
      setTask({});

    } else {
      const date = new Date();
      const task = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()} `,
      };
      setTaskList([...taskList, task]);
    }
  };

  return (
    <>
      <section className="addTask">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            autoComplete="off"
            placeholder="Add Task"
            maxLength={25}
            value={task.name || ""}
            onChange={(e) => setTask({ ...task, name: e.target.value })}
          />
          <button type="submit">{task.id ? "Update" : "Add"}</button>
        </form>
      </section>
    </>
  );
}
