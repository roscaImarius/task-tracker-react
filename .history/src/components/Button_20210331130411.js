import React from "react";

const Button = ({ color, showAdd, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, marginBottom: "10px" }}
      className="add-btn"
    >
      {showAdd ? "Cancel add task " : "Add task"}
    </button>
  );
};
Button.defaultProps = {
  color: " rgb(194, 192, 192)",
};

export default Button;
