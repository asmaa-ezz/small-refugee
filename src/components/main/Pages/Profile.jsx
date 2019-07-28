import React, { Component } from "react";
import { connect } from "react-redux";
import ListPosts from "../../post/ListPosts";
import UserInfoPage from "../../common/UserInfoPage";

class Profile extends Component {
  render() {
    const { history } = this.props;
    const { userImage, fullName, stage } = this.props.dataStitic;
    return (
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
            {this.props.user ? (
              <ListPosts
                usernameFilter={this.props.user.username}
                history={history}
                dataStitic={this.props.dataStitic}
              />
            ) : (
              <div>loding</div>
            )}
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

export default connect(mapStatusToProps)(Profile);
