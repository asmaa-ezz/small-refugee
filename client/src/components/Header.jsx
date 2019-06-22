import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderPage = styled.div`
  width: 100%;
  height: 10vh;
  background-color: rgb(138, 43, 226);
  padding-top: 3vh;
`;

const link = {
  color: "#fff",
  marginRight: "30px"
};

class Header extends Component {
  handleUpperCase = str => {
    return str.toUpperCase();
  };

  render() {
    return (
      <HeaderPage>
        <div className="container">
          <Link to="/" style={link}>
            HOME
          </Link>
          {/* no user */}
          <React.Fragment>
            <Link to="/sign-in" style={link}>
              SIGN IN
            </Link>
            <Link to="/sign-up" style={link}>
              SIGN UP
            </Link>
          </React.Fragment>
          {/*  user */}
          <React.Fragment>
            <Link to="/prifile" style={link}>
              PROFILE
            </Link>
            <Link to="/sign-out" style={link}>
              SIGN OUT
            </Link>
          </React.Fragment>
        </div>
      </HeaderPage>
    );
  }
}

export default Header;
