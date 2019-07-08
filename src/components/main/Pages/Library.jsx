import React, { Component } from "react";
import UserInfoPage from "../../common/UserInfoPage";

class Library extends Component {
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
          <div className="col-6" />
          <div className="col-4" />
        </div>
      </div>
    );
  }
}

export default Library;
