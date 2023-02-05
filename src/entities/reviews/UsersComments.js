import { Box, Typography } from "@mui/material";
import React from "react";

function UsersComments({ comm }) {
  return (
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
  );
}

export default UsersComments;
