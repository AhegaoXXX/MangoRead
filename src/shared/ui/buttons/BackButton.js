import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BackButton() {
  return (
    <>
      <Link to={-1}>
        <Button
          sx={{
            display: "flex",
            color: "grey",
            height: "70px",
            alignItems: "center",
            marginRight: "auto",
            textTransform: "inherit",
            fontSize: "24px",
            fontFamily: "Montserrat",
          }}
        >
          <ArrowBackIcon sx={{ fontSize: "24px", marginRight: "8px" }} /> Назад
        </Button>
      </Link>
    </>
  );
}

export default BackButton;
