import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import Input from "@mui/material/Input";
import { FormControl } from "@mui/material";
import initialAvatar from "../../../shared/media/img/initialAvatar.png";
import { postRegisterAccount } from "../../../app/store/actionsRequest/authActions";
import { useDispatch } from "react-redux";

function SecondRegModalComp() {
  const dispatch = useDispatch();
  const [regAccount, setRegAccount] = useState({
    username: "",
    nickname: "",
    password: "",
    imageForm: null,
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState();

  const handleRegister = () => {
    let formData = new FormData();
    formData.append("username", regAccount.username);
    formData.append("nickname", regAccount.nickname);
    formData.append("image_file", regAccount.imageForm);
    formData.append("password", regAccount.password);

    dispatch(postRegisterAccount(formData));
  };

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
      setRegAccount({ ...regAccount, imageForm: selectedImage });
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
          value={regAccount.username}
          onChange={(e) =>
            setRegAccount({ ...regAccount, username: e.target.value })
          }
        />

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
          }}
          disableUnderline
          placeholder="Nickname"
          type="nickname"
          id="nickname"
          name="nickname"
          value={regAccount.nickname}
          onChange={(e) =>
            setRegAccount({ ...regAccount, nickname: e.target.value })
          }
        />

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
          }}
          disableUnderline
          placeholder="Password"
          type="password"
          id="password"
          name="password"
          value={regAccount.password}
          onChange={(e) =>
            setRegAccount({ ...regAccount, password: e.target.value })
          }
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
