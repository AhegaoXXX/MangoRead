import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddCommentComp from "../../features/addCommentComp/AddCommentComp";
import { addCommentMode } from "../../app/store/mangaSlice";
import swal from "sweetalert";

function CommentSection() {
  const dispatch = useDispatch();
  const { comment, addCommentModal } = useSelector(
    (state) => state.mangaReducer
  );
  let newCommentSection = [...comment];
  const [isLogined, setIsLogined] = useState(false);
  const { account } = useSelector((state) => state.signUpReducer);
  useEffect(() => {
    setIsLogined(account);
  }, [dispatch, account, comment]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "33px",
          textAlign: "start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "Montserrat",
              fontSize: "35px",
              fontWeight: "500",
              width: "20%",
              whiteSpace: "nowrap",
            }}
          >
            Топ рецензий
          </span>
          <Button
            onClick={() => {
              isLogined === true
                ? dispatch(addCommentMode())
                : swal({
                    title: "Error:",
                    text: "You are not authorized",
                    icon: "error",
                  });
            }}
            sx={{
              color: "#AD02E0",
              fontWeight: 600,
            }}
          >
            Добавить комментарий
          </Button>
          {addCommentModal === true ? <AddCommentComp /> : <></>}
        </Box>

        <Box
          sx={{
            maxHeight: "650px",
            overflow: "scroll",
            overflowX: "hidden",
            "&::-webkit-scrollbar": {
              width: "0px",
            },
          }}
        >
          {comment ? (
            newCommentSection.reverse()?.map((comm, id) => (
              <span key={id}>
                <Box
                  sx={{
                    display: "flex",
                    paddingTop: "33px",
                    height: "200px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      minWidth: "100px",
                      height: "100px",
                      borderRadius: "50% ",
                      alignItems: "flex-start",
                      backgroundSize: "cover",
                      backgroundImage: `url(${comm?.user?.image_file})`,
                      marginLeft: "10px",
                      marginRight: "26px",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      paddingLeft: "26px",
                      borderLeft: "2px solid #878787",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "35px",
                        fontFamily: "Montserrat",
                      }}
                    >
                      {comm?.user?.username}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "24px",
                        fontFamily: "Montserrat",
                        color: "#878787",
                      }}
                    >
                      {comm.text}
                    </Typography>
                  </Box>
                </Box>
              </span>
            ))
          ) : (
            <>There is empty</>
          )}
        </Box>
      </Box>
    </>
  );
}

export default CommentSection;
