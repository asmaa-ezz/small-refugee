import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { DecodeToken } from "../store/action/actionCreator/actionAuth";

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
  componentDidMount() {
    this.props.DecodeToken();
  }

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
          {this.props.user ? (
            <React.Fragment>
              <Link to="/Profile" style={link}>
                {this.props.user.username &&
                  this.handleUpperCase(this.props.user.username)}
              </Link>
              <Link to="/sign-out" style={link}>
                SIGN OUT
              </Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link to="/sign-in" style={link}>
                SIGN IN
              </Link>
              <Link to="/sign-up" style={link}>
                SIGN UP
              </Link>
            </React.Fragment>
          )}
        </div>
      </HeaderPage>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    DecodeToken: () => dispatch(DecodeToken())
  };
};

const mapStatusToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(
  mapStatusToProps,
  mapDispatchToProps
)(Header);
