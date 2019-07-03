import React, { Component } from "react";
import { connect } from "react-redux";
import ListPosts from "../../post/ListPosts";
import { DecodeToken } from "../../../store/action/actionCreator/actionAuth";

class Profile extends Component {
  componentDidMount() {
    this.props.DecodeToken();
  }

  render() {
    return this.props.user ? (
      <React.Fragment>
        <ListPosts usernameFilter={this.props.user.username} />
      </React.Fragment>
    ) : (
      <div>loging</div>
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
)(Profile);
