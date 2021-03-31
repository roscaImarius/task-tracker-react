import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <h1>Task tracker</h1>
      <h4>Version 1.0.0</h4>
      <Link to="/">Go Back</Link>
    </div>
  );
};
