import React, { Component } from "react";
import { connect } from "react-redux";
import { DecodeToken } from "../store/action/actionCreator/actionAuth";

class IsUser extends Component {
  componentDidMount() {
    this.props.DecodeToken();
  }
  render() {
    return <div />;
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
)(IsUser);
