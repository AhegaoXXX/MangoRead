import React, { useState, useEffect } from "react";
import classes from "./Header.module.css";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import FullLogo from "../../../shared/ui/branding/FullLogo";
import SearchBarManga from "../../../features/searchBarManga/SearchBarManga";
import UnAuthorizedMode from "../../auth/unAuthorizedMode/UnAuthorizedMode";
import AuthorizedMode from "../../auth/authorizedMode/AuthorizedMode";

function Header() {
  const dispatch = useDispatch();

  const { account } = useSelector((state) => state.signUpReducer);
  const [isLogined, setIsLogined] = useState(false);
  useEffect(() => {
    setIsLogined(account);
  }, [dispatch, account]);

  return (
    <div className={classes.header}>
      <Container
        disableGutters
        maxWidth="1240px"
        sx={{
          fontFamily: "Montserrat",
          width: "1240px",
          display: "flex",
          height: "110px",
          justifyContent: "space-between",
          "& a": {
            display: "flex",
            textDecoration: "none",
            justifyContent: "center",
          },
        }}
      >
        <NavLink to="/">
          <FullLogo />
        </NavLink>
        <div className={classes.search}>
          <SearchBarManga />
        </div>
        {isLogined === true ? <AuthorizedMode /> : <UnAuthorizedMode />}
      </Container>
    </div>
  );
}

export default Header;
