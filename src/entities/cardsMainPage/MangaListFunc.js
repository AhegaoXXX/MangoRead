import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CardsMainPage from "./CardsMainPage";

const MangaListFunc = ({ arr }) => {
  const { countMangas } = useSelector((state) => state.mangaReducer);
  const mangaCount = Math.ceil(countMangas / 12) - 1;

  return (
    <>
      {arr?.slice(0, 12)?.map((item, id) => (
        <NavLink key={id} to={`/${item?.id}`}>
        <CardsMainPage
          key={id}
          post={{
            image: item?.image,
            year: item?.issue_year,
            name: item?.ru_name,
          }}
          pag={mangaCount}
        />
      </NavLink>
      ))}
    </>
  );
};

export default MangaListFunc;
