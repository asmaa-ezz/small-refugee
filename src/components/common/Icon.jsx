import React from "react";
import { RED } from "../../constant/Color";

const Icon = ({ source, text, number }) => {
  return (
    <span style={{ margin: "10px", position: "relative" }}>
      <span
        style={{
          height: "14px",
          width: "14px",
          borderRadius: "50%",
          background: RED,
          color: "#fff",
          textAlign: "center",
          position: "absolute",
          right: "12px",
          fontFamily: "Cairo, sans-serif",
          fontWeight: 500,
          fontSize: "9px"
        }}
      >
        {number}
      </span>
      <img src={source} alt={text} />
    </span>
  );
};

export default Icon;
