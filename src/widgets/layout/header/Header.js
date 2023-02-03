import React, { useState, useEffect } from "react";
import classes from "./Header.module.css";
import Container from "@mui/material/Container";
import logo from "../../../shared/media/img/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import MainSignUp from "../../registerModal/MainSignUp";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Logout from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { getMangas } from "../../../app/store/mangaSlice";
import { infoModalOpen, logOutAcc } from "../../../app/store/signUpSlice";
import StandardButton from "../../../shared/components/buttons/StandardButton";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const regExpSearch = / /g;

  const handleOpen = () => dispatch(infoModalOpen());
  const { user, account } = useSelector((state) => state.signUpReducer);
  const [isLogined, setIsLogined] = useState(false);
  const logOutFunc = () => {
    dispatch(
      logOutAcc({
        refresh: JSON.parse(localStorage.getItem("tokenR")),
      })
    );
  };
  useEffect(() => {
    dispatch(getMangas());
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
          <div className={classes.logo}>
            <div className={classes.logoImg}>
              <img src={logo} alt="logo" />
            </div>

            <div className={classes.logoText}>
              <h1>MangoRead</h1>
              <p>Читай мангу с нами</p>
            </div>
          </div>
        </NavLink>
        <div className={classes.search}>
          <Input
            sx={{
              width: "342px",
              height: "56px",
              border: "2px solid grey",
              borderRadius: "8px",
              paddingLeft: "16px",
              fontSize: "20px",
              display: "flex",
              letterSpacing: "1.5px",
            }}
            disableUnderline
            placeholder="Placeholder"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon
                  sx={{
                    color: "black",
                    paddingRight: "4px",
                  }}
                />
              </InputAdornment>
            }
            type="search"
            onChange={(e) =>
              dispatch(
                getMangas(
                  e.target.value
                    ? `search=${e.target.value.replace(regExpSearch, "%20")}`
                    : ""
                )
              )
            }
          />
        </div>
        {isLogined === true ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "24px",
                fontWeight: 400,
                textAlign: "right",
              }}
            >
              {user?.username}
            </Typography>
            <Box>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  sx={{
                    ml: 2,
                    justifyContent: "space-between",
                  }}
                >
                  <Avatar src={user?.image_file} sx={{ width: 80, height: 80 }}>
                    Me
                  </Avatar>
                  <ArrowDropDownIcon
                    sx={{
                      fontSize: "30px",
                      marginLeft: "10px",
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <Button onClick={() => logOutFunc()}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        ) : (
          <div className={classes.register}>
            <StandardButton
              styling={{
                width: "142px",
                height: "50px",
                bgColor: "white",
                color: "black",
                border: "2px solid #AD02E0",
                hoverColor: "white",
                activeColor: "white",
              }}
            >
              <a href onClick={handleOpen}>Войти</a>
            </StandardButton>
            <MainSignUp />
            <StandardButton
              styling={{
                width: "206px",
                height: "50px",
                bgColor: "#AD02E0",
                color: "white",
              }}
            >
              <a href onClick={handleOpen}>Регистрация</a>
            </StandardButton>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Header;
