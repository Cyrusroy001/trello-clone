import React from "react";
import "./BoardTitle.css";

const BoardTitle = () => {
  return (
    <div className="title-div">
      <h1 className="title">Kanban Board</h1>
      <div className="star-wrapper">
        <span className="star" class="material-icons">
          star_border
        </span>
      </div>
      <div className="horizontal-separator"></div>
      <div className="button-wrapper">
        <img
          className="earth-image"
          src="https://trello-replica.web.app/static/media/earth_white.b0d834ac.svg"
          alt=""
        ></img>
        <span className="button-label">Public</span>
      </div>
      <div className="horizontal-separator"></div>
      <div className="user-avatar">AH</div>
    </div>
  );
};

export default BoardTitle;
