import React from "react";
import TrelloCard from "../TrelloCard/TrelloCard";
import TrelloActionButton from "../TrelloActionButton/TrelloActionButton";
import "./TrelloList.css";

const TrelloList = (props) => {
    return (
      <div className="list-container">
        <h4>{props.title}</h4>
        {props.cards.map((card) => <TrelloCard key={card.id} text={card.text}/>)}
        <TrelloActionButton />
      </div>
    );
};

export default TrelloList;