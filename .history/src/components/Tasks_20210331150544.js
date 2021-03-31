import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDubleClick, onDelete }) => {
  return (
    <div>
      {tasks.map((t, index) => (
        <Task
          key={t.index}
          onDubleClick={onDubleClick}
          onDelete={onDelete}
          t={t}
        />
      ))}
    </div>
  );
};

export default Tasks;
