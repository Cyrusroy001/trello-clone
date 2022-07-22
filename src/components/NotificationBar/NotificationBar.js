import React from "react";
import "./NotificationBar.css";

const NotificationBar = () => {
  return (
    <div className="bar">
      <div className="content">
        <div className="error-icon">
          <span class="material-icons">error</span>
        </div>

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
