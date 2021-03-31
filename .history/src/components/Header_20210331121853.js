import React, { useState } from "react";
import PropTypes from "prop-types";
import Tasks from "./Tasks";
import Button from "./Button";
import AddTask from "./AddTask";

const Header = ({
  title,
  onClickAdd,
  onDelete,
  onSaveTask,
  onDubleClick,
  tasks,
  showAdd,
  setShowAdd,
}) => {
  return (
    <header className="header-container">
      <h1>{title}</h1>
      <Button onClick={onClickAdd} color="yellow" />

      {showAdd && <AddTask onSaveTask={onSaveTask} />}
      <Tasks onDelete={onDelete} onDubleClick={onDubleClick} tasks={tasks} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
