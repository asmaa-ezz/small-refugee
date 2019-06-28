import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ListPosts from "../post/ListPosts";
import { DecodeToken } from "../../store/action/actionCreator/actionAuth";

class UserProfile extends Component {
  componentDidMount() {
    this.props.DecodeToken();
  }
  render() {
    console.log(this.props.user && this.props.user.username);

    this.props.user &&
    this.props.user.username === this.props.match.params.username
      ? console.log(0)
      : console.log(1);

    return this.props.user &&
      this.props.user.username === this.props.match.params.username ? (
      <Redirect to="/profile" />
    ) : (
      <ListPosts usernameFilter={this.props.match.params.username} />
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
)(UserProfile);
