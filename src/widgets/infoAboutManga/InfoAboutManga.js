import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function InfoAboutManga() {
  const parse = require("html-react-parser");
  const { manga } = useSelector((state) => state.mangaReducer);

  const { genres } = useSelector((state) => state.mangaReducer);
  useEffect(() => {}, [manga]);
  return (
    <>
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
          src={manga?.image}
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
            {manga?.ru_name}
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
            {manga?.chapters_quantity} глав, &nbsp;
            {manga?.likes} &hearts;, &nbsp;
            {manga?.rating} &#9733;
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 400,
              fontFamily: "Montserrat",
              paddingBottom: "20px",
            }}
          >
            Тип: {manga?.type}
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 400,
              fontFamily: "Montserrat",
              paddingBottom: "20px",
            }}
          >
            Год: {manga?.issue_year}
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              fontFamily: "Montserrat",
              fontWeight: 400,
            }}
          >
            Жанр:{" "}
            {manga?.genre?.map((i, id) => (
              <span key={id}>{genres[i - 1]?.title}, </span>
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
            overflow: "scroll",
            overflowX: "hidden",
            "&::-webkit-scrollbar": {
              width: "0px",
            },
          }}
        >
          {parse(manga?.description || "")}
        </Typography>
      </Box>
    </>
  );
}

export default InfoAboutManga;
