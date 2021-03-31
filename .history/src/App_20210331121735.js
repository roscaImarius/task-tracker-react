import "./App.css";
import Header from "./components/Header";
import React, { useState } from "react";

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Go to doctor",
      day: "Jan 15th at 12:30am",
      reminder: false,
    },
    {
      id: 2,
      text: "Walk the dog",
      day: "Dec 8th at 4:10am",
      reminder: true,
    },
    {
      id: 3,
      text: "Die",
      day: "Feb 5th at 2:30am",
      reminder: true,
    },
  ]);
  const onClickAdd = () => {
    console.log("bla");
  };

  // add task
  const onSaveTask = (task) => {
    let randId = new Date().getTime();
    const newTask = { id: randId, ...task };
    console.log(newTask);
    setTasks([...tasks, newTask]);
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
