import React from "react";
import { Card } from "react-bootstrap";

const CardContainer = ({ children }) => {
  return (
    <Card
      style={{
        padding: "2rem",
        borderRadius: "10px",
        border: "2px solid black",
      }}
    >
      {children}
    </Card>
  );
};

export default CardContainer;
