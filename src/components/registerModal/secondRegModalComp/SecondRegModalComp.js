import React, { useState, useEffect } from "react";
import { Typography, Box, Button, InputLabel } from "@mui/material";
import { Label } from "@mui/icons-material";
import Input from "@mui/material/Input";
import { FormControl } from "@mui/material";
import swal from "sweetalert";
import axios from "axios";
import "react-image-upload/dist/index.css";
import initialAvatar from "../../../img/initialAvatar.png";

function SecondRegModalComp() {
  const [placeholderUsername, setPlaceholderUsername] = useState("Username");
  const [placeholderNickname, setPlaceholderNickname] = useState("Nickname");
  const [placeholderPassword, setPlaceholderPassword] = useState("Password");
  const [placeholderColor, setPlaceholderColor] = useState("");
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("nickname", nickname);
    formData.append("image_file", imageForm);
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
        console.log(error);
      });
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState();
  const [imageForm, setImageForm] = useState();
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
      setImageForm(selectedImage);
      console.log(imageForm);
    }
  }, [selectedImage]);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormControl
          sx={{
            marginBottom: "14px",
          }}
        >
          <Box mt={2} textAlign="center">
            <img
              src={imageUrl || initialAvatar}
              alt="avatar"
              height="100px"
              style={{
                height: 181,
                width: 181,
                borderRadius: "50%",
              }}
            />
          </Box>
          <Input
            accept="image/*"
            type="file"
            id="select-image"
            style={{ display: "none" }}
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
          <label
            htmlFor="select-image"
            style={{
              textAlign: "center",
            }}
          >
            <Button
              component="span"
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "400",
                fontSize: "16px",
                margin: "0 auto",
                color: "inherit",
              }}
            >
              ДОБАВЬТЕ ФОТО
            </Button>
          </label>
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
    </div>
  );
}

export default SecondRegModalComp;
