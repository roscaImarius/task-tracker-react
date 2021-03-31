import React, { useState } from "react";

const AddTask = ({ onSaveTask }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [remainder, setRemainder] = useState(false);
  const [textAdded, setTextAdded] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      setTextAdded(false);
      return;
    }

    onSaveTask({ text, date, remainder });

    setText("");
    setDate("");
    setRemainder(false);
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
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="remainder">Remainder</label>
        <input
          type="checkbox"
          id="remainder"
          checked={remainder}
          onChange={(e) => setRemainder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save task" />
    </form>
  );
};

export default AddTask;
