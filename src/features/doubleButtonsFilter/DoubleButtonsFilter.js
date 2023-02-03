import React from "react";
import StandardButton from "../../shared/components/buttons/StandardButton";

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
        <a href onClick={resetFilter}>
          Сбросить
        </a>
      </StandardButton>
      <StandardButton
        styling={{
          width: "174px",
          height: "52px",
          bgColor: "#AD02E0",
          color: "white",
        }}
      >
        <a href onClick={applyFilter}>
          Применить
        </a>
      </StandardButton>
    </>
  );
}

export default DoubleButtonsFilter;
