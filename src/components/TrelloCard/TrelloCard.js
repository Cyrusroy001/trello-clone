import React from "react";
import "./TrelloCard.css";
import { Card, CardContent, Typography } from "@mui/material";

const TrelloCard = (props) => {
    return (
      <div className="card-container">
        <Card sx={{ minWidth: 284 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {props.text}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
};

export default TrelloCard;