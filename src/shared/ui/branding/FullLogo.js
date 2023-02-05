import React from "react";
import logo from "../../../shared/media/img/logo.svg";

function FullLogo() {
  return (
    <div
      style={{
        display: "flex",
        width: "275px",
        alignItems: "center",
      }}
    >
      <div>
        <img
          src={logo}
          alt="logo"
          style={{
            width: "104px",
            height: "83px",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          paddingLeft: "5px",
        }}
      >
        <h1
          style={{
            marginBottom: "auto",
            fontSize: "20px",
            paddingBottom: "4px",
            color: "black",
          }}
        >
          MangoRead
        </h1>
        <p
          style={{
            marginTop: "auto",
            fontSize: "16",
            color: "#878787",
          }}
        >
          Читай мангу с нами
        </p>
      </div>
    </div>
  );
}

export default FullLogo;
