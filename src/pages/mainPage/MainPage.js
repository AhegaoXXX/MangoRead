import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import classes from "./MainPage.module.css";
import "@fontsource/montserrat";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CardsMainPage from "../../components/cardsMainPage/CardsMainPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getMangas } from "../../store/mangaSlice";
import FilterCompStart from "../../components/filterComp/FilterCompStart";
import FilterCompNext from "../../components/filterComp/FilterCompNext";

function MainPage() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2FE09B",
        contrastText: "#EEE",
      },
    },
  });
  const dispatch = useDispatch();
  const { modalChange, mangas, filtered, countMangas } = useSelector(
    (state) => state.mangaReducer
  );
  useEffect(() => {}, [dispatch]);
  const mangaCount = Math.ceil(countMangas / 12);
  const mangaListFunc = (arr) => {
    return arr?.slice(0, 12)?.map((item, id) => (
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
    ));
  };

  return (
    <div className={classes.mainPage}>
      <Header />

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
                  <Box
                    sx={{
                      display: "flex",
                      width: "400px",
                      height: "700px",
                      boxShadow: "0 4px 15px 0px rgba(128, 128, 128, 0.226)",
                      justifyContent: "center",
                      borderRadius: "15px",
                    }}
                  >
                    {!modalChange ? <FilterCompStart /> : <FilterCompNext />}
                  </Box>

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
                    {filtered.length === 0
                      ? mangaListFunc(mangas?.results)
                      : mangaListFunc(filtered)}
                  </Box>
                </Box>

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
              </Stack>
            </ThemeProvider>
          </Box>
        </Container>
      </Box>

      <Footer />
    </div>
  );
}

export default MainPage;
