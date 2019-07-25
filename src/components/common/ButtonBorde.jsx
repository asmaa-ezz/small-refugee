import React from "react";
import { Link } from "react-router-dom";
import { PURPLE } from "../../constant/Color";

const ButtonBorde = ({
  path,
  text,
  padding,
  height,
  marginTop,
  backgroundColor,
  isDisabled,
  history
}) => {
  return (
    <React.Fragment>
      <div
        // to={path}
        onClick={() => {
          isDisabled && history.push(path);
        }}
      >
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
      </div>
    </React.Fragment>
  );
};

export default ButtonBorde;
