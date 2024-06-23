import React from "react";
import "./Input.css";

function Input({ handleChange, value, title, name }) {
  return (
    <label className="sidebar-label-container ms-0">
      <input type="radio" onChange={handleChange} value={value} name={name} />
      <span className="checkmark"></span>
      {title}
    </label>
  );
}

export default Input;
