import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./InfoPage.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "@fontsource/montserrat";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getInfoManga, getComment, getGenre } from "../../store/mangaSlice";
import AddCommentComp from "../../components/addCommentComp/AddCommentComp";
import parse from 'html-react-parser';


function InfoPage() {
  const dispatch = useDispatch();
  const parse = require('html-react-parser');
  const { id } = useParams();

  const { manga, countMangas, comment, genres } = useSelector(
    (state) => state.mangaReducer
  );
  const [isLogined, setIsLogined] = useState(false);
  const { account } = useSelector((state) => state.signUpReducer);

  useEffect(() => {
    dispatch(getInfoManga(id));
    dispatch(getComment(id));
    dispatch(getGenre());
    setIsLogined(account);
  }, [dispatch, id, account]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#2FE09B",
        contrastText: "#EEE",
      },
    },
  });
  const mangaCount = Math.ceil(countMangas / 12);

  return (
    <div className={classes.infoPage}>
      <Header />

      {
        manga?.map((item, id) => {
            return (
              <Box
                sx={{
                  bgcolor: "#F3F3F3",
                  display: "flex",
                  justifyContent: "center",
                }}
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
                    <Link to={-1}>
                      <Button
                        sx={{
                          display: "flex",
                          color: "grey",
                          height: "70px",
                          alignItems: "center",
                          marginRight: "auto",
                          textTransform: "inherit",
                          fontSize: "24px",
                          fontFamily: "Montserrat",
                        }}
                      >
                        <ArrowBackIcon
                          sx={{ fontSize: "24px", marginRight: "8px" }}
                        />{" "}
                        Назад
                      </Button>
                    </Link>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      paddingBottom: "33px",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        height: 328,
                        width: 328,
                        borderRadius: "16px",
                        boxShadow: "0 0 20px 0 grey",
                      }}
                      alt="img"
                      src={item?.image}
                    ></Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        paddingLeft: "40px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "40px",
                          fontWeight: 500,
                          fontFamily: "Montserrat",
                          paddingBottom: "40px",
                          lineHeight: "48.76px",
                        }}
                      >
                        {item?.ru_name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "30px",
                          fontWeight: 400,
                          fontFamily: "Montserrat",
                          paddingBottom: "20px",
                        }}
                      >
                        Информация: &nbsp;
                          {item?.chapters_quantity} глав, &nbsp;
                          {item?.likes} &hearts;, &nbsp;
                          {item?.rating} &#9733;
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "24px",
                          fontWeight: 400,
                          fontFamily: "Montserrat",
                          paddingBottom: "20px",
                        }}
                      >
                        Тип: {item?.type}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "24px",
                          fontWeight: 400,
                          fontFamily: "Montserrat",
                          paddingBottom: "20px",
                        }}
                      >
                        Год: {item?.issue_year}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "24px",
                          fontFamily: "Montserrat",
                          fontWeight: 400,
                        }}
                      >
                        Жанр:{" "}
                        {item?.genre?.map((i) => (
                          <>{genres[i]?.title}, </>
                        ))}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      height: "460px",
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "start",
                      paddingTop: "32px",
                      paddingBottom: "32px",
                      borderTop: "2px solid #CECECE",
                      borderBottom: "2px solid #CECECE",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "35px",
                        fontWeight: 500,
                        lineHeight: "42.67px",
                        paddingBottom: "10px",
                        fontFamily: "Montserrat",
                      }}
                    >
                      Синопсис
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "400",
                        lineHeight: "33.6px",
                        color: "#616161",
                        fontFamily: "Montserrat",
                        height: "374px",
                      }}
                    >
                      {parse(item?.description)}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "33px",
                      textAlign: "start",
                    }}
                  >
                    {isLogined === true ? <AddCommentComp /> : <></>}
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontSize: "35px",
                        fontWeight: "500",
                      }}
                    >
                      Топ рецензий
                    </Typography>

                    {comment ? (
                      comment?.slice(0, 3).map((comm, id) => (
                        <>
                          <Box
                            sx={{
                              display: "flex",
                              paddingTop: "33px",
                              height: "200px",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                minWidth: "100px",
                                height: "100px",
                                borderRadius: "50% ",
                                alignItems: "flex-start",
                                backgroundSize: "cover",
                                backgroundImage: `url(${comm?.user?.image_file})`,
                                marginLeft: "10px",
                                marginRight: "26px",
                              }}
                            ></Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                paddingLeft: "26px",
                                borderLeft: "2px solid #878787",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontWeight: "400",
                                  fontSize: "35px",
                                  fontFamily: "Montserrat",
                                }}
                              >
                                {comm?.user?.username}
                              </Typography>
                              <Typography
                                sx={{
                                  fontWeight: "400",
                                  fontSize: "24px",
                                  fontFamily: "Montserrat",
                                  color: "#878787",
                                }}
                              >
                                {comm.text}
                              </Typography>
                            </Box>
                          </Box>
                        </>
                      ))
                    ) : (
                      <>OMG</>
                    )}
                  </Box>
                  `
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
                          defaultPage={item?.id}
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
                          }}
                          onChange={(e, value) => {
                            dispatch(getInfoManga(value));
                            dispatch(getComment(value));
                          }}
                        />
                      </Stack>
                    </ThemeProvider>
                  </Box>
                </Box>
              </Box>
            );
        })
      }

      <Footer />
    </div>
  );
}

export default InfoPage;
