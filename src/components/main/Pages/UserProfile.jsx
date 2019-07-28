import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ListPosts from "../../post/ListPosts";
import UserInfoPage from "../../common/UserInfoPage";

class UserProfile extends Component {
  render() {
    const { history } = this.props;
    const { userImage, fullName, stage } = this.props.dataStitic;
    return this.props.user &&
      this.props.user.username === this.props.match.params.username ? (
      <Redirect to="/profile" />
    ) : (
      <div className="container">
        <div className="row">
          <div className="col-2">
            <UserInfoPage
              history={history}
              image={userImage}
              fullName={fullName}
              type={stage}
            />
          </div>
          <div className="col-6">
            <ListPosts
              usernameFilter={this.props.match.params.username}
              history={history}
              dataStitic={this.props.dataStitic}
            />
          </div>
          <div className="col-4">
            <div />
          </div>
        </div>
      </div>
    );
  }
}

const mapStatusToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStatusToProps)(UserProfile);
