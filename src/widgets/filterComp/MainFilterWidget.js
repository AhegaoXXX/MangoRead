import React from "react";
import { useSelector } from "react-redux";
import FilterCompNext from "./FilterCompNext";
import FilterCompStart from "./FilterCompStart";

function MainFilterWidget() {
  const { modalChange } = useSelector((state) => state.mangaReducer);

  return (
    <div
      style={{
        display: "flex",
        width: "400px",
        height: "700px",
        boxShadow: "0 4px 15px 0px rgba(128, 128, 128, 0.226)",
        justifyContent: "center",
        borderRadius: "15px",
      }}
    >
      {!modalChange ? <FilterCompStart /> : <FilterCompNext />}
    </div>
  );
}

export default MainFilterWidget;
