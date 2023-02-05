import React from "react";
import classes from "./Footer.module.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import FullLogo from "../../../shared/ui/branding/FullLogo";
import LinksContact from "../../../entities/ui/linksContact/LinksContact";
import GMap from "../../../entities/ui/googleMap/GMap";
import ProductRightsLinks from "../../../entities/ui/productRightsLinks/ProductRightsLinks";

function Footer() {
  return (
    <Box
      className={classes.footer}
      sx={{
        height: "402px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        boxShadow: "4px 0px 15px 0px rgba(128, 128, 128, 0.226)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "310px",
          borderBottom: "1px solid #BBBBBB",
        }}
      >
        <Container
          disableGutters
          maxWidth="1240px"
          sx={{
            fontFamily: "Montserrat",
            width: "1240px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            "& a": {
              textDecoration: "none",
            },
          }}
        >
          <NavLink to="/">
            <FullLogo />
          </NavLink>

          <Box
            sx={{
              height: "136px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <LinksContact/>
          </Box>

          <GMap/>
        </Container>
      </Box>

      <Box
        sx={{
          display: "flex",
          height: "92px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ProductRightsLinks/>
      </Box>
    </Box>
  );
}

export default Footer;
