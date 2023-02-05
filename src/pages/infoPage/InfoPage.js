import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./InfoPage.module.css";
import "@fontsource/montserrat";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import {
  getGenre,
  getInfoManga,
} from "../../app/store/actionsRequest/mangaListActions";
import { getComment } from "../../app/store/actionsRequest/commentAction";
import BackButton from "../../shared/ui/buttons/BackButton";
import InfoAboutManga from "../../widgets/infoAboutManga/InfoAboutManga";
import InfoMangaPagination from "../../features/infoMangaPagination/InfoMangaPagination";
import CommentSection from "../../widgets/commentSection/CommentSection";

function InfoPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { comment } = useSelector((state) => state.mangaReducer);

  useEffect(() => {
    dispatch(getInfoManga(id));
    dispatch(getComment(id));
    dispatch(getGenre());
  }, [dispatch, id, comment]);
  // Если убрать "comment" из зависимости, то заработает пагинация. Пока не решил конфликт
  // Без "comment" комментарии не будут появляться в реальном времени

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
          <InfoAboutManga />

          <CommentSection />

          <InfoMangaPagination id={id}/>
        </Box>
      </Box>
    </div>
  );
}

export default InfoPage;
