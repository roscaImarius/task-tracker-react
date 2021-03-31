import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ t, onDubleClick, onDelete }) => {
  return (
    <div
      onDoubleClick={() => onDubleClick(t.id)}
      className={t.reminder ? " task" : "task marked"}
    >
      <div>
        <p>{t.text}</p>
        <p>{t.day}</p>
      </div>
      <FaTimes className="x" onClick={() => onDelete(t.id)} />
    </div>
  );
};

export default Task;
