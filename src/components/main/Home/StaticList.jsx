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
    return (
      <React.Fragment>
        <Card className="profile">
          {this.props.user.avatar && (
            <img
              src={this.props.user.avatar}
              alt="img"
              style={{ width: "35%", borderRadius: "50%", marginBottom: "10%" }}
            />
          )}
          <h6 className="">
            {this.props.user.first_name &&
              `${this.props.user.first_name} ${this.props.user.last_name}`}
          </h6>
          <button
            type="button"
            class="btn btn-primary"
            style={{ borderRadius: "30px" }}
          >
            <span className="text small">طالب صف الأول</span>
          </button>
        </Card>

        <div className="list" style={{ marginTop: "10%" }}>
          <button type="button" class="btn btn-outline-primary btn-block">
            شارك أفكارك
          </button>
          <button type="button" class="btn btn-outline-primary btn-block">
            تعلم
          </button>
          <button type="button" class="btn btn-outline-primary btn-block">
            المكتبة
          </button>
          <button type="button" class="btn btn-outline-primary btn-block">
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
