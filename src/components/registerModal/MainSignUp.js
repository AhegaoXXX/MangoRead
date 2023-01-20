import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import classes from "./MainSignUp.module.css";
import CloseIcon from "@mui/icons-material/Close";
import Input from "@mui/material/Input";
import Modal from "@mui/material/Modal";
import { Button, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { FormControl } from "@mui/material";
import swal from "sweetalert";
import axios from "axios";
import { infoModalClose, getAccount } from "../../store/signUpSlice";
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function MainSignUp() {
  const dispatch = useDispatch();
  const [placeholderUsername, setPlaceholderUsername] = useState("Username");
  const [placeholderNickname, setPlaceholderNickname] = useState("Nickname");
  const [placeholderPassword, setPlaceholderPassword] = useState("Password");
  const [placeholderColor, setPlaceholderColor] = useState("");
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [logUser, setLogUser] = useState("");
  const [logPass, setLogPass] = useState("");

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    dispatch(infoModalClose());
    setOpen(false);
    setPlaceholderUsername("Username");
    setPlaceholderNickname("Nickname");
    setPlaceholderPassword("Password");
    setPlaceholderColor("inherit");
  };
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [imageX, setImage] = useState("");
  function getImageFileObject(imageFile) {
    setImage(imageFile.file);
  }
  function runAfterImageDelete(file) {
    console.log({ onDele: file });
  }
  const openAction = useSelector((state) => state.signUpReducer.mode);

  const handleRegister = (e) => {
    if (username === "" || nickname === "" || password === "") {
      setPlaceholderUsername("This field is required");
      setPlaceholderNickname("This field is required");
      setPlaceholderPassword("This field is required");
      setPlaceholderColor("red");
    } else {
      let formData = new FormData();
      formData.append("username", username);
      formData.append("nickname", nickname);
      formData.append("image_file", imageX);
      formData.append("password", password);

      axios({
        method: "POST",
        url: "http://134.122.75.14:8666/api/auth/signup/",
        headers: { "Content-type": "multipart/form-data" },
        data: formData,
      })
        .then((response) => {
          swal({
            icon: "success",
          });
        })
        .catch(function (error) {
          alert(error);
          console.log();
        });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (logUser === "" || logPass === "") {
      setPlaceholderUsername("This field is required");
      setPlaceholderPassword("This field is required");
      setPlaceholderColor("red");
    } else {
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
    }
  };

  return (
    <div className={classes.mainSignUp}>
      <Modal
        open={openAction}
        className={classes.modalWindow1}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          overflow: "hidden",
          position: "fixed",
          left: "calc(50% - 301px)",
        }}
      >
        <div className={classes.registerModal}>
          <Box
            sx={{
              width: "500px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                padding: "0",
                margin: "0",
                ".MuiSvgIcon-root": {
                  path: {
                    fontSize: "large",
                  },
                },
              }}
            >
              <Button
                onClick={handleClose}
                sx={{
                  padding: "0",
                  margin: "0",
                  ".MuiSvgIcon-fontSizeLarge": {
                    fontSize: "35px",
                    path: {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <CloseIcon fontSize="large" sx={{ color: "black" }} />
              </Button>
            </Box>

            <Box
              sx={{
                borderColor: "divider",
                width: "100%",
                borderBottom: "2px solid #878787",
                textAlign: "start",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs"
                indicatorColor="secondary"
                textColor="inherit"
              >
                <Tab
                  label="Вход"
                  {...a11yProps(0)}
                  sx={{
                    display: "flex",
                    color: "black",
                    textDecoration: "none",
                    fontSize: "24px",
                    fontWeight: "400px",
                    lineHeight: "35px",
                    padding: "0",
                    height: "35px",
                    marginRight: "30px",
                  }}
                />
                <Tab
                  label="Регистрация"
                  {...a11yProps(1)}
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "24px",
                    padding: "0",
                    fontWeight: "400px",
                    lineHeight: "35px",
                    height: "35px",
                  }}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0} sx={{}}>
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
                    className={classes.myCheckBox}
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
                  className={classes.button}
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
            </TabPanel>

            <TabPanel value={value} index={1}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FormControl
                  sx={{
                    marginTop: "24px",
                    marginBottom: "44px",
                  }}
                >
                  <ImageUploader
                    onFileAdded={(img) => getImageFileObject(img)}
                    onFileRemoved={(img) => runAfterImageDelete(img)}
                    style={{
                      height: 181,
                      width: 181,
                      background: "rgb(153, 150, 150)",
                      borderRadius: "50%",
                      marginBottom: "40px",
                    }}
                    deleteIcon={
                      <img
                        src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"
                        alt=""
                      />
                    }
                    uploadIcon={
                      <AddPhotoAlternateIcon
                        sx={{
                          fontSize: "90px",
                        }}
                      />
                    }
                  />
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: "400",
                      fontSize: "16px",
                      margin: "0 auto",
                    }}
                  >
                    ДОБАВЬТЕ ФОТО
                  </Typography>
                </FormControl>

                <FormControl>
                  <Input
                    sx={{
                      width: "500px",
                      height: "52px",
                      fontSize: "20px",
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
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormControl>

                <FormControl>
                  <Input
                    sx={{
                      width: "500px",
                      height: "52px",
                      fontSize: "20px",
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
                    placeholder={placeholderNickname}
                    type="nickname"
                    id="nickname"
                    name="nickname"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                  />
                </FormControl>

                <FormControl>
                  <Input
                    sx={{
                      width: "500px",
                      height: "52px",
                      fontSize: "20px",
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
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>

                <Button
                  onClick={handleRegister}
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
                  Регистрация{" "}
                </Button>
              </Box>
            </TabPanel>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

export default MainSignUp;
