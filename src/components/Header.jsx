import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  DecodeToken,
  GetDataUser
} from "../store/action/actionCreator/actionAuth";

const HeaderPage = styled.div`
  width: 100%;
  background-color: rgb(138, 43, 226);
  height: 10vh;
  padding-top: 2vh;
`;

const link = {
  color: "#fff",
  marginLeft: "5%"
};

class Header extends Component {
  componentDidMount() {
    this.props.GetDataUser();
  }

  handleUpperCase = str => {
    return str.toUpperCase();
  };

  render() {
    return (
      <HeaderPage>
        <div className="container">
          {this.props.user ? (
            <div className="row">
              <div class="col-2 text-right">
                <Link to="/" style={{ fontSize: "1.5em", color: "#fff" }}>
                  Small Refugee
                </Link>
              </div>
              <div class="col-6">
                <input
                  type="serch"
                  className="form-control"
                  placeholder="بإمكانك البحث من هنا"
                  style={{ width: "100%" }}
                />
              </div>
              <div class="col-4">
                <Link to="/profile" style={link}>
                  {this.props.user.first_name &&
                    `${this.props.user.first_name} ${
                      this.props.user.last_name
                    }`}
                </Link>
                <Link to="/sign-out" style={link}>
                  تسجيل الخروج
                </Link>
              </div>
            </div>
          ) : (
            <React.Fragment>
              <Link to="/sign-in" style={link}>
                تسجيل الدخول
              </Link>
              <Link to="/sign-up" style={link}>
                إنشاء حساب
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
    GetDataUser: () => dispatch(GetDataUser())
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
