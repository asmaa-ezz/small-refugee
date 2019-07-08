import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  DecodeToken,
  GetDataUser
} from "../store/action/actionCreator/actionAuth";
import { PURPLE, GREEN } from "../constant/Color";
import Logo from "./common/Logo";
import ButtonBorde from "./common/ButtonBorde";
import Icon from "./common/Icon";
import UserInfoHeader from "./common/UserInfoHeader";

import Bell from "../assets/image/Bell.png";
import Message from "../assets/image/Message.png";

const HeaderPage = styled.div`
  width: 100%;
  background-color: ${PURPLE};
  height: 12vh;
  padding-top: 2vh;
`;

class Header extends Component {
  componentDidMount() {
    this.props.GetDataUser();
  }

  render() {
    console.log(this.props);

    return (
      <HeaderPage>
        <div className="container">
          {this.props.user ? (
            <div className="row">
              <div className="col-2 text-right">
                <Logo />
              </div>

              <div className="col-6" style={{ paddingTop: "6px" }}>
                <input
                  type="serch"
                  className="form-control"
                  placeholder="بإمكانك البحث من هنا"
                  style={{
                    height: "6vh",
                    width: "100%",
                    color: PURPLE,
                    fontFamily: "Cairo, sans-serif",
                    fontSize: "11px"
                  }}
                />
              </div>

              <div className="col-4" style={{ display: "flex" }}>
                {/* <span> */}
                <UserInfoHeader
                  image={this.props.user.avatar}
                  fullName={`${this.props.user.first_name} ${
                    this.props.user.last_name
                  }`}
                  type="طالب"
                />
                {/* </span> */}

                <Icon source={Message} text="Message" number="4" />
                <Icon source={Bell} text="Bell" number="3" />

                <ButtonBorde
                  height={"40px"}
                  path="/sign-out"
                  text="تسجيل الخروج"
                  padding="5px 20px"
                  marginTop="4px"
                />
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-2 text-right">
                <Logo />
              </div>
              <div className="col-10 text-right" style={{ marginTop: "12px" }}>
                <Link
                  to="/sign-in"
                  style={{
                    color: "#fff",
                    marginLeft: "30px",
                    fontFamily: "Cairo, sans-serif"
                  }}
                >
                  تسجيل الدخول
                </Link>
                <ButtonBorde
                  path="/sign-up"
                  text="التسجيل"
                  padding="5px 30px"
                />
              </div>
            </div>
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
