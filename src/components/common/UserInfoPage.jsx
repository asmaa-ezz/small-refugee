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
      <div className="user-info">
        <img src={image} alt="" />
        <p
          style={{
            fontFamily: "Cairo, sans-serif",
            fontSize: "12px",
            fontWeight: 800,
            color: PURPLE
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
        isFocus={true}
      />
      <ButtonListUserInfo
        history={history}
        text="تعلم"
        path="/learn"
        isFocus={false}
      />
      <ButtonListUserInfo
        history={history}
        text="المكتبة"
        path="/library"
        isFocus={false}
      />
      <ButtonListUserInfo
        history={history}
        text="روابط أخرى"
        path="/other-link"
        isFocus={false}
      />
    </div>
  );
};

export default UserInfoPage;
