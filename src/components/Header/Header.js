import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="top-left-menu">
        <button className="button-wrapper">
          <img
            className="button-icon"
            src="https://trello-replica.web.app/static/media/apps_white.2aa687f0.svg"
            alt=""
          ></img>
          <img
            className="button-icon"
            src="https://trello-replica.web.app/static/media/apps_white.2aa687f0.svg"
            alt=""
          ></img>
        </button>
        <div className="menu-item">
          <div className="logo"></div>
        </div>
        <div className="menu-item">
          <span>Workspaces</span>
          <img className="arrow-down" src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
