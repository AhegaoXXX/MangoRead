import React from "react";
import { Button } from "@mui/material";

const StandardButton = ({ children, styling }) => {
  return (
    <>
      <Button
        sx={{
          letterSpacing: "1.5px",
          fontSize: "16px",
          backgroundColor: `${styling.bgColor ? styling.bgColor : "#AD02E0"}`,
          color: `${styling.color ? styling.color : "white"}`,
          width: `${styling.width ? styling.width : "206px"}`,
          height: `${styling.height ? styling.height : "50px"}`,
          border: `${styling.border ? styling.border : ""}`,
          borderRadius: "8px",
          ":hover": {
            backgroundColor: "#AD02E0",
            boxShadow: "0 0 10px 2px #AD02E0",
            color: `${styling.hoverColor ? styling.hoverColor : ""}`,
          },
          ":active": {
            backgroundColor: "purple",
            color: `${styling.activeColor ? styling.hoverColor : ""}`,
          },
        }}
        variant="contained"
      >
        {children}
      </Button>
    </>
  );
};

export default StandardButton;
