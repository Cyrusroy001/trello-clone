import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <button className="button-wrapper-side white-button">
        <div className="person-icon">
          <span class="material-icons">person</span>
        </div>
      </button>
      <button className="button-wrapper-side">
        <span class="material-icons">
          keyboard_double_arrow_right
        </span>
      </button>
    </nav>
  );
};

export default SideBar;
