import React from "react";
import "./NotificationBar.css";

const NotificationBar = () => {
  return (
    <div className="bar">
      <div className="content">
        <img
          className="earth-icon"
          src="https://trello-replica.web.app/static/media/earth_green.f5dba22e.svg"
          alt=""
        ></img>
        <div className="message">
          This board is set to public. Board admins can change its visibility
          setting at any time.
        </div>
        <div className="know-more">Learn more here</div>
      </div>
      <div className="close-button">
        <span class="material-icons">close</span>
      </div>
    </div>
  );
};

export default NotificationBar;
