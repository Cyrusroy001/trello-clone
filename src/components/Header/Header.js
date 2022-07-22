import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="top-left-menu">
        <button className="button-wrapper-intersect">
          <span class="material-icons">apps</span>
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
        <div className="button-wrapper-header">
          <span class="material-icons">info</span>
        </div>
        <div className="button-wrapper-header">
          <span class="material-icons">notifications</span>
        </div>
        <span className="user-avatar">QK</span>
      </div>
    </div>
  );
};

export default Header;


