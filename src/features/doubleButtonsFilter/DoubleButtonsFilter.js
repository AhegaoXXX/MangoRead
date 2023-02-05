import React from "react";
import StandardButton from "../../shared/ui/buttons/StandardButton";
import { Link } from "react-router-dom";

function DoubleButtonsFilter({ resetFilter, applyFilter }) {
  return (
    <>
      <StandardButton
        styling={{
          width: "174px",
          height: "52px",
          bgColor: "#AD02E0",
          color: "white",
        }}
      >
        <Link style={{textDecoration:"none", color:"inherit"}} onClick={resetFilter}>
          Сбросить
        </Link>
      </StandardButton>
      <StandardButton
        styling={{
          width: "174px",
          height: "52px",
          bgColor: "#AD02E0",
          color: "white",
        }}
      >
        <Link style={{textDecoration:"none", color:"inherit"}} onClick={applyFilter}>
          Применить
        </Link>
      </StandardButton>
    </>
  );
}

export default DoubleButtonsFilter;
