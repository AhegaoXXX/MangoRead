import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./InfoPage.module.css";
import "@fontsource/montserrat";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import {
  getGenre,
  getInfoManga,
  getComment,
} from "../../app/store/actionsRequest/mangaListActions";
import BackButton from "../../shared/ui/buttons/BackButton";
import InfoAboutManga from "../../widgets/infoAboutManga/InfoAboutManga";
import InfoMangaPagination from "../../features/infoMangaPagination/InfoMangaPagination";
import CommentSection from "../../widgets/commentSection/CommentSection";

function InfoPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { manga } = useSelector((state) => state.mangaReducer);
  useEffect(() => {
    dispatch(getInfoManga(id));
    dispatch(getComment(id));
    dispatch(getGenre());
  }, [dispatch, id]);

  return (
    <div className={classes.infoPage}>
      <Box
        sx={{
          bgcolor: "#F3F3F3",
          display: "flex",
          justifyContent: "center",
        }}
        key={id}
      >
        <Box
          sx={{
            fontFamily: "Montserrat",
            width: "1240px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            padding: "0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              "& a": {
                textDecoration: "none",
              },
            }}
          >
            <BackButton />
          </Box>
          <InfoAboutManga mangaItem={manga} />

          <CommentSection />

          <InfoMangaPagination pagItem={manga} />
        </Box>
      </Box>
    </div>
  );
}

export default InfoPage;
