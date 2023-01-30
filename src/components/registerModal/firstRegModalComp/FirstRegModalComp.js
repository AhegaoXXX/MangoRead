import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import Input from "@mui/material/Input";
import { Button, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { FormControl } from "@mui/material";
import swal from "sweetalert";
import axios from "axios";
import { infoModalClose, getAccount } from "../../../store/signUpSlice";
import "react-image-upload/dist/index.css";

function FirstRegModalComp() {
  const dispatch = useDispatch();
  const [placeholderUsername, setPlaceholderUsername] = useState("Username");
  const [placeholderPassword, setPlaceholderPassword] = useState("Password");
  const [placeholderColor, setPlaceholderColor] = useState("");
  const [logUser, setLogUser] = useState("");
  const [logPass, setLogPass] = useState("");

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleLogin = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("username", logUser);
    formData.append("password", logPass);

    axios
      .post("http://134.122.75.14:8666/api/auth/signin/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        localStorage.setItem("tokenA", JSON.stringify(response.data.access));
        localStorage.setItem("tokenR", JSON.stringify(response.data.refresh));
        swal({
          icon: "success",
        });
        dispatch(getAccount(logUser));
      })
      .catch(function (error) {
        alert(error);
      });
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "45px",
        }}
      >
        <FormControl>
          <Input
            sx={{
              width: "500px",
              height: "52px",
              border: "2px solid grey",
              borderRadius: "8px",
              paddingLeft: "16px",
              fontSize: "24px",
              fontWeight: "400",
              display: "flex",
              letterSpacing: "1.5px",
              fontFamily: "Montserrat",
              marginBottom: "30px",
              color: `${placeholderColor}`,
            }}
            disableUnderline
            placeholder={placeholderUsername}
            type="username"
            id="logUser"
            name="logUser"
            value={logUser}
            onChange={(e) => setLogUser(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <Input
            sx={{
              width: "500px",
              height: "52px",
              border: "2px solid grey",
              borderRadius: "8px",
              paddingLeft: "16px",
              fontSize: "24px",
              fontWeight: "400",
              display: "flex",
              letterSpacing: "1.5px",
              fontFamily: "Montserrat",
              marginBottom: "30px",
              color: `${placeholderColor}`,
            }}
            disableUnderline
            placeholder={placeholderPassword}
            type="password"
            id="logPass"
            name="logPass"
            value={logPass}
            onChange={(e) => setLogPass(e.target.value)}
          />
        </FormControl>

        <Box
          sx={{
            display: "flex",
            width: "254px",
            height: "35px",
            marginRight: "auto",
            marginBottom: "30px",
          }}
        >
          <Checkbox
            {...label}
            color="secondary"
            size="large"
            classes={{ root: "custom-checkbox-root" }}
            sx={{
              borderColor: "#AD02E0",
              padding: "0 35px 0 0",
              color: "#AD02E0",
              width: "30px",
              ".MuiSvgIcon-fontSizeLarge": {
                fontSize: "42.5px",
                path: {
                  transform: "scale(1.1)",
                },
              },
            }}
          />

          <Typography
            sx={{
              fontFamily: "Montserrat",
              color: "#878787",
              fontSize: "24px",
              whiteSpace: "nowrap",
            }}
          >
            Запомнить меня
          </Typography>
        </Box>

        <Button
          onClick={handleLogin}
          sx={{
            letterSpacing: "1.5px",
            fontSize: "16px",
            backgroundColor: "#AD02E0",
            color: "white",
            width: "500px",
            height: "52px",
            borderRadius: "8px",
            ":hover": {
              backgroundColor: "#AD02E0",
              boxShadow: "0 0 10px 2px #AD02E0",
            },
            ":active": {
              backgroundColor: "purple",
            },
          }}
          variant="contained"
        >
          Вход
        </Button>
      </Box>
    </div>
  );
}

export default FirstRegModalComp;