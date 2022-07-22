import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <button className="button-wrapper white-button">
        <img
          alt=""
          src="https://trello-replica.web.app/static/media/user-blue.022f390c.png"
          className="button-icon2"
        ></img>
      </button>
      <button className="button-wrapper transparent-button">
        <span class="material-icons side-material">keyboard_double_arrow_right</span>
      </button>
    </nav>
  );
};

export default SideBar;
