import React from "react";
import { PURPLE, GREEN } from "../../constant/Color";
import ButtonListUserInfo from "./ButtonListUserInfo";

const UserInfoPage = ({ history, image, fullName, type }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "5px",
        textAlign: "center"
      }}
    >
      <div className="user-info" style={{ padding: "20px 0 40px 0" }}>
        <img
          src={image}
          alt=""
          style={{ borderRadius: "50%", width: "60px", marginBottom: "10px" }}
        />
        <p
          style={{
            fontFamily: "Cairo, sans-serif",
            fontSize: "12px",
            fontWeight: 800,
            color: PURPLE,
            marginBottom: "10px"
          }}
        >
          {fullName}
        </p>
        <span
          style={{
            backgroundColor: GREEN,
            borderRadius: "10px",
            color: "#fff",
            fontFamily: "Cairo, sans-serif",
            fontSize: "9px",
            padding: "3px 13px"
          }}
        >
          {type}
        </span>
      </div>
      <div className="list-button" />
      <ButtonListUserInfo
        history={history}
        text="شارك أفكارك"
        path="/"
        isFocus={
          history.location.pathname === "/" ||
          history.location.pathname.includes("posts")
        }
      />
      <ButtonListUserInfo
        history={history}
        text="تعلم"
        path="/learn"
        isFocus={history.location.pathname.includes("/learn")}
      />
      <ButtonListUserInfo
        history={history}
        text="المكتبة"
        path="/library"
        isFocus={history.location.pathname === "/library"}
      />
      <ButtonListUserInfo
        history={history}
        text="روابط أخرى"
        path="/other-link"
        isFocus={history.location.pathname === "/other-link"}
      />
    </div>
  );
};

export default UserInfoPage;
