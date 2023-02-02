import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import Input from "@mui/material/Input";
import { Button, TextField } from "@mui/material";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import { addCommentAction } from "../../app/store/signUpSlice";
import { useParams } from "react-router-dom";
import Modal from "@mui/material/Modal";
import swal from "sweetalert";
import { addCommentMode } from "../../app/store/mangaSlice";

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
  const handleClose = () => {
    dispatch(addCommentMode());
  };
  const { addCommentModal } = useSelector((state) => state.mangaReducer);

  console.log(addCommentModal);

  return (
    <div
      style={{
        display: "none",
      }}
    >
      <Modal
        disableScrollLock
        open={addCommentModal}
        onClose={handleClose}
        sx={{
          overflow: "hidden",
          position: "fixed",
        }}
      >
        <Box
          sx={{
            borderBottom: "2px solid #CECECE",
            marginTop: "10%",
            paddingBottom: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "32px",
            width: "780px",
            height: "302px",
            marginX: "auto",
          }}
        >
          <Box
            sx={{
              paddingTop: "37px",
              paddingBottom: "53px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              src={user?.image_file}
              sx={{
                width: "100px",
                height: "100px",
                border: "0.9rem ridge #AD02E0",
                marginRight: "40px",
              }}
            />
            <Typography
              sx={{
                fontSize: "50px",
                fontFamily: "Montserrat",
              }}
            >
              ~ {user?.username} ~
            </Typography>
          </Box>

          <Box
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <TextField
              margin="dense"
              placeholder="Добавьте комментарий"
              type="text"
              variant="outlined"
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize: "18px",
                width: "500px",
                height: "52px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
              onChange={(e) => setUserComment(e.target.value)}
            />
            <Button
              onClick={changeInput}
              sx={{
                backgroundColor: "#AD02E0",
                fontSize: "16px",
                color: "white",
                width: "230px",
                height: "52px",
                borderRadius: "0 8px 8px 0",
                ":hover": {
                  backgroundColor: "#AD02E0",
                  boxShadow: "0 0 10px 2px #AD02E0",
                },
                ":active": {
                  backgroundColor: "purple",
                },
              }}
            >
              Добавить
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default AddCommentComp;
