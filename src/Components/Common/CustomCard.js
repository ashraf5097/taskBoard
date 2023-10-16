import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function CustomCard({ item, index }) {
  return (
    <Card
      key={index}
      sx={{
        marginBottom: 2,
        backgroundColor: "#0a223d",
        // background: "linear-gradient(150deg, #d67600, white)",
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontSize: "1rem", color: "#d67600" }}>
          <span style={{ color: "white" }}>Task Name - </span> {item.name}
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "1rem", color: "#d67600" }}>
          <span style={{ color: "white" }}>Task Description - </span>
          {item?.description}
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "1rem", color: "#d67600" }}>
          <span style={{ color: "white" }}>Task Deadline - </span>
          {item?.deadline}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
