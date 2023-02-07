import {
  Box,
  createTheme,
  Pagination,
  Stack,
  ThemeProvider,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoManga } from "../../app/store/actionsRequest/mangaListActions";
import { getComment } from "../../app/store/actionsRequest/commentAction";

function InfoMangaPagination({ id }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2FE09B",
        contrastText: "#EEE",
      },
    },
  });
  const dispatch = useDispatch();

  const { mangas } = useSelector((state) => state.mangaReducer);
  useEffect(() => {}, [dispatch]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "110px",
          width: "100%",
        }}
      >
        <ThemeProvider theme={theme}>
          <Stack spacing={2}>
            <Pagination
              defaultPage={+id}
              count={mangas?.count}
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
              }}
              onChange={(e, value) => {
                dispatch(getInfoManga(value));
                dispatch(getComment(value));
              }}
            />
          </Stack>
        </ThemeProvider>
      </Box>
    </>
  );
}

export default InfoMangaPagination;
