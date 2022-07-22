import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import "./TrelloCard.css";

const CardContainer = styled.div`
  margin-bottom: 8px;
`;

const TrelloCard = ({ text, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className="trello-card" sx={{ minWidth: 264, minHeight: 50 }}>
            <CardContent>
              <div style={{
                backgroundColor: "blue",
                width: 40,
                height: 8,
                marginBottom: 6,
                borderRadius: 4,
              }}></div>
              <Typography sx={{ fontSize: 14 }} color="#172b4d">
                {text}
              </Typography>
            </CardContent>
          </Card>
        </CardContainer>
      )}
    </Draggable>
  );
};

export default TrelloCard;
