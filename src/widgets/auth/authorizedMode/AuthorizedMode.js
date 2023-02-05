import {
  Box,
  IconButton,
  Button,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { Logout } from "@mui/icons-material";
import { logOutAcc } from "../../../app/store/actionsRequest/authActions";

function AuthorizedMode() {
  const { user } = useSelector((state) => state.signUpReducer);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logOutFunc = () => {
    dispatch(
      logOutAcc({
        refresh: JSON.parse(localStorage.getItem("tokenR")),
      })
    );
  };
  useEffect(() => {}, [dispatch]);

  return (
    <div>
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
    </div>
  );
}

export default AuthorizedMode;
