import React from "react";
import InfoPageWL from "../../pages/pagesWithLayout/InfoPageWL";
import MainPageWL from "../../pages/pagesWithLayout/MainPageWL";
import { Route, Routes } from "react-router-dom";

function RoutePages() {
  return (
    <>
      <Routes>
        <Route index element={<MainPageWL />} />
        <Route path="/:id" element={<InfoPageWL />} />
      </Routes>
    </>
  );
}

export default RoutePages;
