import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);
  const [textAdded, setTextAdded] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      setTextAdded(false);
      return;
    }

    addTask({ text, date, reminder });

    setText("");
    setDate("");
    setReminder(false);
  };

  //   console.log(text, date, remainder);
  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div className="form-field">
        <label htmlFor="text">Task name</label>
        <input
          type="text"
          value={text}
          id="text"
          placeholder="Insert task..."
          onChange={(e) => {
            setTextAdded(true);
            setText(e.target.value);
          }}
        />
        {!textAdded ? <p>* Required!</p> : ""}
      </div>
      <div className="form-field">
        <label htmlFor="date">Date</label>
        <input
          type="text"
          id="date"
          value={date}
          placeholder="Insert date/hour"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="remainder">Remainder</label>
        <input
          type="checkbox"
          id="reminder"
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input className="saveTask" type="submit" value="Save task" />
    </form>
  );
};

export default AddTask;
