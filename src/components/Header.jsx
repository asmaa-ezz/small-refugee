import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PURPLE, GREEN } from "../constant/Color";
import Logo from "./common/Logo";
import ButtonBordeHeader from "./common/ButtonBordeHeader";
import Icon from "./common/Icon";
import UserInfoHeader from "./common/UserInfoHeader";

import Bell from "../assets/image/Bell.png";
import Message from "../assets/image/Message.png";

const HeaderPage = styled.div`
  width: 100%;
  background-color: ${PURPLE};
  padding: 10px 0px;
`;

class Header extends Component {
  render() {
    const { isLogin } = this.props;
    return (
      <HeaderPage>
        <div className="container">
          {localStorage.getItem("token") ? (
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
                    // height: "6vh",
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
                  image={this.props.dataStitic.userImage}
                  fullName={this.props.dataStitic.fullName}
                  type="طالب"
                />
                {/* </span> */}

                <Icon source={Message} text="Message" number="4" />
                <Icon source={Bell} text="Bell" number="3" />

                <ButtonBordeHeader
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
              <div
                className="col-10 text-right"
                style={{
                  marginTop: "5px",
                  display: "flex",
                  justifyContent: "flex-end"
                }}
              >
                <Link
                  to="/sign-in"
                  style={{
                    color: "#fff",
                    marginLeft: "30px",
                    fontFamily: "Cairo, sans-serif",
                    marginTop: "5px"
                  }}
                >
                  تسجيل الدخول
                </Link>
                <ButtonBordeHeader
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

export default Header;
