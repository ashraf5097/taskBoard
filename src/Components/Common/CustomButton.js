import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CustomButton = ({ onClick, label }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
export default CustomButton;
