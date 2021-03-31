import "./App.css";
import Header from "./components/Header";
import React, { useState } from "react";

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState([]);

  // show add form
  const onClickAdd = () => {
    setShowAdd(!showAdd);
  };

  // save task
  const onSaveTask = (task) => {
    let randId = new Date().getTime();
    const newTask = { id: randId, ...task };
    console.log(newTask);
    setTasks([...tasks, newTask]);
    setShowAdd(false);
  };

  //delete task
  const onDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };
  // Mark task
  const onDubleClick = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="App">
      <Header
        showAdd={showAdd}
        setShowAdd={setShowAdd}
        title={"Task tracker"}
        onDelete={onDelete}
        onSaveTask={onSaveTask}
        onClickAdd={onClickAdd}
        onDubleClick={onDubleClick}
        tasks={tasks}
      />
      {tasks.length === 0 ? <p>No tasks to show</p> : null}
    </div>
  );
}

export default App;
