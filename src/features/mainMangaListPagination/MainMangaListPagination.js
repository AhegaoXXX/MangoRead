import { Pagination } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMangas } from "../../app/store/actionsRequest/mangaListActions";

function MainMangaListPagination() {
  const dispatch = useDispatch();
  const { countMangas } = useSelector((state) => state.mangaReducer);
  const mangaCount = Math.ceil(countMangas / 12) - 1;
  useEffect(() => {}, [dispatch]);

  return (
    <>
      <Pagination
        count={mangaCount ? mangaCount : 1}
        size="large"
        color="primary"
        sx={{
          button: {
            color: "#A5A5A5",
            fontSize: "24px",
            width: "45px",
            height: "45px",
            borderRadius: "50%",
          },
          ".MuiPagination-root": {
            fontSize: "24px",
          },
          "& ul": {
            justifyContent: "center",
          },
        }}
        onChange={(e, value) => {
          dispatch(getMangas(`offset=${value * 12 - 1}`));
        }}
      />
    </>
  );
}

export default MainMangaListPagination;
