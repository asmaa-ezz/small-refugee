import React from "react";
import { Link } from "react-router-dom";
import { GREEN } from "../../constant/Color";

const UserInfoHeader = ({ fullName, type, image }) => {
  return (
    <Link to="/profile">
      <img
        src={image}
        alt="user"
        style={{
          display: "inline-block",
          width: "36px",
          height: "36px",
          border: "2px solid #fff",
          borderRadius: "50%",
          background: GREEN,
          position: "relative",
          top: "6px",
          marginLeft: "5px"
        }}
      />
      <p
        style={{
          display: "inline-block",
          fontFamily: "Cairo, sans-serif",
          fontSize: "12px",
          fontWeight: 700,
          color: "#fff",
          position: "relative"
        }}
      >
        {fullName}
      </p>
      <div
        style={{
          display: "inline-block",
          backgroundColor: GREEN,
          color: "#fff",
          height: "12.07px",
          width: "29.98px",
          fontSize: "9px",
          textAlign: "center",
          borderRadius: "10px",
          position: "absolute",
          bottom: "6px",
          right: "57px",
          fontFamily: "Cairo, sans-serif"
        }}
      >
        {type}
      </div>
    </Link>
  );
};

export default UserInfoHeader;
