import React, { Component } from "react";
import { connect } from "react-redux";
import { LogOutRemoveToken } from "../store/action/actionCreator/actionAuth";

class SignOut extends Component {
  componentDidMount() {
    this.props.LogOutRemoveToken();
  }
  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    LogOutRemoveToken: () => dispatch(LogOutRemoveToken())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignOut);
