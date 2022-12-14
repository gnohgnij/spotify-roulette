import React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import Emoji from "./Emoji";

const CardComponent = (props) => {
  return (
    <Card
      sx={{
        height: "8rem",
        width: "8rem",
        borderRadius: "15%",
        backgroundColor: "#191414",
        ":hover": {
          backgroundColor: "#4f9dfa",
        },
      }}
    >
      <CardActionArea onClick={props.onClick}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Emoji symbol={props.symbol} />
          <Typography
            variant="h5"
            sx={{
              color: "#ffffff",
            }}
          >
            {props.genre}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
