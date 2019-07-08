import React from "react";
import { PURPLE } from "../../constant/Color";

const focus = {
  fontFamily: "Cairo, sans-serif",
  fontSize: "12px",
  fontWeight: 800,
  height: "48px",
  color: "#fff",
  background: PURPLE
};

const normal = {
  fontFamily: "Cairo, sans-serif",
  fontSize: "12px",
  fontWeight: 800,
  height: "48px",
  color: PURPLE
};

const ButtonListUserInfo = ({ history, text, path, isFocus }) => {
  return (
    <div
      className="share"
      onClick={() => {
        history.push(path);
      }}
      style={isFocus ? focus : normal}
      // style={{ }}
    >
      {text}
    </div>
  );
};

export default ButtonListUserInfo;
