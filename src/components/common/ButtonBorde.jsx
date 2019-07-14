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
       
      >
        <div  style={{
          backgroundColor: backgroundColor || PURPLE,
          marginTop: marginTop || "auto",
          border: "1px solid #fff",
          // textAlign: "center",
          borderRadius: "5px",
          // fontFamily: "Cairo, sans-serif"
        }} > 
        <div  style={{
          // marginTop: marginTop || "auto",
          color: "#fff",
          padding: padding,
          textAlign: "center",
          fontFamily: "Cairo, sans-serif"
        }} > {text}</div>
        
         </div>
       
      </Link>
    </React.Fragment>
  );
};

export default ButtonBorde;
