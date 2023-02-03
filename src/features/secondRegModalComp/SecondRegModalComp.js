import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import Input from "@mui/material/Input";
import { FormControl } from "@mui/material";
import swal from "sweetalert";
import axios from "axios";
import initialAvatar from "../../shared/media/img/initialAvatar.png";

function SecondRegModalComp() {
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
          title: "Success:",
          text: "You are registered successfully!",
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
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
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
        </Box>

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
          }}
          disableUnderline
          placeholder="Username"
          type="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

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
          }}
          disableUnderline
          placeholder="Nickname"
          type="nickname"
          id="nickname"
          name="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

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
          }}
          disableUnderline
          placeholder="Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

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
      </FormControl>
    </div>
  );
}

export default SecondRegModalComp;
