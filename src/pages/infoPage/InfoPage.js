import React from "react";
import "@fontsource/montserrat";
import Box from "@mui/material/Box";
import BackButton from "../../shared/ui/buttons/BackButton";
import InfoAboutManga from "../../widgets/infoAboutManga/InfoAboutManga";
import InfoMangaPagination from "../../features/infoMangaPagination/InfoMangaPagination";
import CommentSection from "../../widgets/commentSection/CommentSection";
import { useParams } from "react-router-dom";

function InfoPage() {
  const { id } = useParams();

  return (
    <div
      style={{
        fontFamily: "Montserrat",
      }}
    >
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
            <BackButton />
          </Box>
          <InfoAboutManga id={id} />

          <CommentSection id={id} />

          <InfoMangaPagination id={id} />
        </Box>
      </Box>
    </div>
  );
}

export default InfoPage;
