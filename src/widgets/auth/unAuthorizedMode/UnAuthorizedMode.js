import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { infoModalOpen } from "../../../app/store/signUpSlice";
import StandardButton from "../../../shared/components/buttons/StandardButton";
import MainSignUp from "../../../widgets/registerModal/MainSignUp";
import { Link } from "react-router-dom";

function UnAuthorizedMode() {
  const dispatch = useDispatch();

  const handleOpen = () => dispatch(infoModalOpen());
  useEffect(() => {}, [dispatch]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "auto 0",
        justifyContent: "space-between",
        width: "363px",
        height: "50px",
      }}
    >
      <StandardButton
        styling={{
          width: "142px",
          height: "50px",
          bgColor: "white",
          color: "black",
          border: "2px solid #AD02E0",
          hoverColor: "white",
          activeColor: "white",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={handleOpen}
        >
          Войти
        </Link>
      </StandardButton>
      <MainSignUp />
      <StandardButton
        styling={{
          width: "206px",
          height: "50px",
          bgColor: "#AD02E0",
          color: "white",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={handleOpen}
        >
          Регистрация
        </Link>
      </StandardButton>
    </div>
  );
}

export default UnAuthorizedMode;
