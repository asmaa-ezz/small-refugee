import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Card = styled.div`
  height: 30vh;
  background: #fff;
  border-radius: 5px;
  text-align: center;
  padding-top: 15%;
`;

class StaticList extends Component {
  render() {
    const { click } = this.props;
    return (
      <React.Fragment>
        <Card className="profile">
          {this.props.user && (
            <img
              src={this.props.user.avatar}
              alt="img"
              style={{ width: "35%", borderRadius: "50%", marginBottom: "10%" }}
            />
          )}
          <h6 className="">
            {this.props.user &&
              `${this.props.user.first_name} ${this.props.user.last_name}`}
          </h6>
          <button
            type="button"
            className="btn btn-primary"
            style={{ borderRadius: "30px" }}
          >
            <span className="text small">طالب صف الأول</span>
          </button>
        </Card>

        <div className="list" style={{ marginTop: "10%" }}>
          <button
            type="button"
            className={`btn btn-block ${
              click === "share" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => {
              window.location = "/";
            }}
          >
            شارك أفكارك
          </button>
          <button
            type="button"
            className={`btn btn-block ${
              click === "learn" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => {
              window.location = "/learn";
            }}
          >
            تعلم
          </button>
          <button
            type="button"
            className={`btn btn-block ${
              click === "library" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => {
              window.location = "/library";
            }}
          >
            المكتبة
          </button>
          <button
            type="button"
            className={`btn btn-block ${
              click === "other" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => {
              window.location = "/other-link";
            }}
          >
            روابط أحرى
          </button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
export default connect(mapStateToProps)(StaticList);
