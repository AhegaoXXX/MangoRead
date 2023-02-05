import React from "react";
import classes from "./MainPage.module.css";
import "@fontsource/montserrat";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainMangaList from "../../features/mainMangaList/MainMangaList";
import MainMangaListPagination from "../../features/mainMangaListPagination/MainMangaListPagination";
import MainFilterWidget from "../../widgets/filterComp/MainFilterWidget";

function MainPage() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2FE09B",
        contrastText: "#EEE",
      },
    },
  });

  return (
    <div className={classes.mainPage}>
      <Box
        sx={{
          display: "flex",
          height: "846px",
          backgroundColor: "F3F3F3",
        }}
      >
        <Container
          sx={{
            fontFamily: "Montserrat",
            width: "1240px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ThemeProvider theme={theme}>
              <Stack spacing={3}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "1240px",
                  }}
                >
                  <MainFilterWidget />

                  <MainMangaList />
                </Box>

                <MainMangaListPagination />
              </Stack>
            </ThemeProvider>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default MainPage;
