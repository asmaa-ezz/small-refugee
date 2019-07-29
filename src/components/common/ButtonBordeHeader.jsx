import React from "react";
import { Link } from "react-router-dom";
import { PURPLE } from "../../constant/Color";

const ButtonBordeHeader = ({
  path,
  text,
  padding,
  height,
  marginTop,
  backgroundColor
}) => {
  return (
    <React.Fragment>
      <Link to={path}>
        <div
          style={{
            backgroundColor: backgroundColor || PURPLE,
            marginTop: marginTop || "auto",
            border: "1px solid #fff",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          <div
            style={{
              color: "#fff",
              padding: padding,
              textAlign: "center",
              fontFamily: "Cairo, sans-serif"
            }}
          >
            {text}
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default ButtonBordeHeader;
