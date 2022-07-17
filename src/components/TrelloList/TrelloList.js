import React from "react";
import TrelloCard from "../TrelloCard/TrelloCard";
import TrelloActionButton from "../TrelloActionButton/TrelloActionButton";
import "./TrelloList.css";

const TrelloList = ({ title, cards, listID }) => {
    return (
      <div className="list-container">
        <h4>{title}</h4>
        {cards.map((card) => <TrelloCard key={card.id} text={card.text}/>)}
        <TrelloActionButton listID={listID} />
      </div>
    );
};

export default TrelloList;