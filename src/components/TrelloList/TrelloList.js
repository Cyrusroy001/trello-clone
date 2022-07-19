import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import TrelloCard from "../TrelloCard/TrelloCard";
import TrelloActionButton from "../TrelloActionButton/TrelloActionButton";

const ListContainer = styled.div`
  background-color: #eaedf0;
  border-radius: 3px;
  width: 280px;
  padding: 8px;
  margin-right: 8px;
`;

const ListTitle = styled.div`
  color: #172b4d;
  font-weight: 600;
  font-size: 14px;
  line-height: 35px;
  padding: 4px 8px 10px;
`;

const TrelloList = ({ title, cards, listID }) => {
  return (
    <div>
      <Droppable droppableId={String(listID)}>
        {(provided) => (
          <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
            <ListTitle>
              {title}
            </ListTitle>
            {cards.map((card, index) => (
              <TrelloCard
                key={card.id}
                index={index}
                text={card.text}
                id={card.id}
              />
            ))}
            {provided.placeholder}
            <TrelloActionButton listID={listID} />
          </ListContainer>
        )}
      </Droppable>
    </div>
  );
};

export default TrelloList;
