import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ListPosts from "../../post/ListPosts";
import { DecodeToken } from "../../../store/action/actionCreator/actionAuth";

class UserProfile extends Component {
  componentDidMount() {
    this.props.DecodeToken();
  }
  render() {
    const history = this.props;
    return this.props.user &&
      this.props.user.username === this.props.match.params.username ? (
      <Redirect to="/profile" />
    ) : (
      <div className="container">
        <div className="row">
          <div className="col-2" />
          <div className="col-6">
            <ListPosts
              usernameFilter={this.props.match.params.username}
              history={history}
            />
          </div>
          <div className="col-4" />
        </div>
      </div>
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
