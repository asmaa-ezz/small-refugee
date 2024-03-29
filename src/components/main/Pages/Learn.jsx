import React, { Component } from "react";
import UserInfoPage from "../../common/UserInfoPage";
import ListSubjects from "../Common/ListSubjects";

class Learn extends Component {
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
          <div className="col-10">
            <ListSubjects history={history} />
          </div>
        </div>
      </div>
    );
  }
}

export default Learn;
