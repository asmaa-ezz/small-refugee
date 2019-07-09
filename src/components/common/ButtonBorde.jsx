import React from "react";
import { Link } from "react-router-dom";
import { PURPLE } from "../../constant/Color";

const ButtonBorde = ({
  path,
  text,
  padding,
  height,
  marginTop,
  backgroundColor
}) => {
  return (
    <React.Fragment>
      <Link
        to={path}
        style={{
          backgroundColor: backgroundColor || PURPLE,
          height: height || "auto",
          marginTop: marginTop || "auto",
          color: "#fff",
          border: "1px solid #fff",
          padding: padding,
          textAlign: "center",
          borderRadius: "5px",
          fontFamily: "Cairo, sans-serif"
        }}
      >
        {text}
      </Link>
    </React.Fragment>
  );
};

export default ButtonBorde;
