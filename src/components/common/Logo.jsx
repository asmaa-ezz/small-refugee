import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GREEN } from "../../constant/Color";

class Logo extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: GREEN,
            color: "#fff",
            height: "16.13px",
            width: "54.78px",
            fontSize: "7px",
            textAlign: "center",
            borderRadius: "10px",
            position: "relative",
            right: "107px",
            fontFamily: "Cairo, sans-serif",
            paddingTop: "4px"
          }}
        >
          نسخة تجربية
        </div>
        <Link
          to="/"
          style={{
            fontSize: "20px",
            color: "#fff",
            fontFamily: "Cairo, sans-serif"
          }}
        >
          Small Refugee
        </Link>
      </React.Fragment>
    );
  }
}

export default Logo;
