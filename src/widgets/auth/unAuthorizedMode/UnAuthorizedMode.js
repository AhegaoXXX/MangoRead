import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  infoModalOpen,
  changeAuthModalTabs,
} from "../../../app/store/signUpSlice";
import StandardButton from "../../../shared/ui/buttons/StandardButton";
import MainSignUp from "../../../widgets/registerModal/MainSignUp";
import { Link } from "react-router-dom";

function UnAuthorizedMode() {
  const dispatch = useDispatch();

  const loginTabOpen = () => {
    dispatch(infoModalOpen());
    dispatch(changeAuthModalTabs(0));
  };
  const registerTabOpen = () => {
    dispatch(infoModalOpen());
    dispatch(changeAuthModalTabs(1));
  };
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
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={loginTabOpen}
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
          Войти
        </StandardButton>
      </Link>
      <MainSignUp />

      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={registerTabOpen}
      >
        <StandardButton
          styling={{
            width: "206px",
            height: "50px",
            bgColor: "#AD02E0",
            color: "white",
          }}
        >
          Регистрация
        </StandardButton>
      </Link>
    </div>
  );
}

export default UnAuthorizedMode;
