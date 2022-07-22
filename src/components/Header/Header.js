import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="top-left-menu">
        <button className="button-wrapper">
          <img
            className="button-icon top-icon"
            src="https://trello-replica.web.app/static/media/apps_white.2aa687f0.svg"
            alt=""
          ></img>
        </button>
        <div className="menu-item">
          <div className="logo"></div>
        </div>
        <div className="menu-item">
          <span>Workspaces</span>
          <span class="material-icons">keyboard_arrow_down</span>
        </div>
        <div className="menu-item">
          <span>Recent</span>
          <span class="material-icons">keyboard_arrow_down</span>
        </div>
        <div className="menu-item">
          <span>Starred</span>
          <span class="material-icons">keyboard_arrow_down</span>
        </div>
        <div className="menu-item">
          <span>Templates</span>
          <span class="material-icons">keyboard_arrow_down</span>
        </div>
        <button className="button-wrapper dark-button">
          <span className="button-label">Create</span>
        </button>
      </div>
      <div className="top-right-menu">
        <div className="search-bar-wrapper">
          <input className="search-input" type="search" placeholder="Search" />
          <span class="material-icons">search</span>
        </div>
        <div className="button-wrapper button-right">
          <img
            src="https://trello-replica.web.app/static/media/info.23e92631.png"
            alt=""
            className="button-icon"
          ></img>
        </div>
        <div className="button-wrapper button-right">
          <img
            src="https://trello-replica.web.app/static/media/notification.c7957132.png"
            alt=""
            className="button-icon"
          ></img>
        </div>
        <span className="user-avatar">QK</span>
      </div>
    </div>
  );
};

export default Header;


