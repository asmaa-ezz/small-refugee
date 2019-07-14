import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GREEN } from "../../constant/Color";

class Logo extends Component {
  render() {
    return (
      <div >
        <div
          style={{
            backgroundColor: GREEN,
            color: "#fff",
            // height: "16.13px",
            width: "54.78px",
            fontSize: "7px",
            textAlign: "center",
            borderRadius: "10px",
            // position: "relative",
            // right: "107px",
            fontFamily: "Cairo, sans-serif",
            padding: "3px",
            float: 'left'
          }}
        >
          نسخة تجربية
        </div>
        <div  style={{
                display: 'inline-block'
          }}>
        <Link
          to="/"
          style={{
            fontSize: "20px",
            color: "#fff",
            fontFamily: "Cairo, sans-serif"
          }}
        >
          Small Refugee
        </Link></div>
        </div>
    );
  }
}

export default Logo;
