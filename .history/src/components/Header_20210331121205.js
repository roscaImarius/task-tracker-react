import React, { useState } from "react";
import PropTypes from "prop-types";
import Tasks from "./Tasks";
import Button from "./Button";
import AddTask from "./AddTask";

const Header = ({
  title,
  onClickAdd,
  onDelete,
  onAdd,
  onDubleClick,
  tasks,
}) => {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <header className="header-container">
      <h1>{title}</h1>
      <Button onClickAdd={onClickAdd} color="yellow" />

      <AddTask onAdd={onAdd} />
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
