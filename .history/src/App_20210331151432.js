import "./App.css";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    // console.log(data);
    return data;
  };

  // show add form
  const onClickAdd = () => {
    setShowAdd(!showAdd);
  };

  // save task
  const onSaveTask = async (task) => {
    // let randId = new Date().getTime();
    // const newTask = { id: randId, ...task };
    // console.log(newTask);
    // setTasks([...tasks, newTask]);
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "aplication/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    console.log(data);
    setTasks([...tasks, data]);
    setShowAdd(false);
  };

  //delete task
  const onDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

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
