import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddCommentComp from "../../features/addCommentComp/AddCommentComp";
import { addCommentMode } from "../../app/store/mangaSlice";
import swal from "sweetalert";
import UsersComments from "../../entities/reviews/UsersComments";

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
  }, [dispatch, account, comment, addCommentModal]);

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
            newCommentSection
              .reverse()
              ?.map((comm, id) => <UsersComments key={id} comm={comm} />)
          ) : (
            <>There is empty</>
          )}
        </Box>
      </Box>
    </>
  );
}

export default CommentSection;
