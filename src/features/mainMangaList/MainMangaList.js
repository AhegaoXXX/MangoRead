import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MangaListFunc from "../../entities/cardsMainPage/MangaListFunc";

function MainMangaList() {
  const { mangas, filtered } = useSelector((state) => state.mangaReducer);
  useEffect(() => {}, [mangas, filtered]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "820px",
          height: "700px",
          justifyContent: "space-between",
          "& a": {
            textDecoration: "none",
          },
        }}
      >
        {filtered.length === 0 ? (
          <MangaListFunc arr={mangas?.results} />
        ) : (
          <MangaListFunc arr={filtered} />
        )}
      </Box>
    </>
  );
}

export default MainMangaList;
