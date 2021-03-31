import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ t, onDubleClick, onDelete }) => {
  return (
    <div
      className={`task ${t.reminder ? "marked " : ""}`}
      onDoubleClick={() => onDubleClick(t.id)}
    >
      <div>
        <p>{t.text}</p>
        <p>{t.date}</p>
      </div>
      <FaTimes className="x" onClick={() => onDelete(t.id)} />
    </div>
  );
};

export default Task;
