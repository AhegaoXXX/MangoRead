import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import { addCommentAction } from "../../store/signUpSlice";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

function AddCommentComp() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.signUpReducer);
  const [userComment, setUserComment] = useState("");
  let dataX = {
    text: userComment,
  };
  let data = { id, dataX };
  const changeInput = () => {
    dispatch(addCommentAction(data));
    swal({
      icon: "success",
    });
  };
  useEffect(() => {}, [dispatch]);

  return (
    <>
      <Box
        sx={{
          borderBottom: "2px solid #CECECE",
          marginBottom: "50px",
          paddingBottom: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "50px",
            fontFamily: "Montserrat",
          }}
        >
          ~ {user?.username} ~
        </Typography>
        <Box
          sx={{
            minHeight: "200px",
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Avatar
            src={user?.image_file}
            sx={{
              width: "100px",
              height: "100px",
              border: "0.8rem ridge #AD02E0",
              marginRight: "40px",
            }}
          />
          <Input
            margin="dense"
            placeholder="What do yo think?"
            type="text"
            variant="standard"
            sx={{
              fontSize: "40px",
              width: "1000px",
              flexWrap: "wrap",
            }}
            onChange={(e) => setUserComment(e.target.value)}
          />
        </Box>

        <Button
          onClick={changeInput}
          sx={{
            backgroundColor: "#AD02E0",
            fontSize: "16px",
            color: "white",
            width: "230px",
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
        >
          Post comment
        </Button>
      </Box>
    </>
  );
}

export default AddCommentComp;
