import React, { Component } from "react";
import ListSubject from "../Common/ListSubject";
import CreatPost from "../../post/CreatPost";
import ListPosts from "../../post/ListPosts";
import UserInfoPage from "../../common/UserInfoPage";

class SubjectPost extends Component {
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
            <ListPosts
              subjectFilter={this.props.match.params.title}
              history={history}
            />
          </div>
          <div className="col-4">
            <ListSubject />
          </div>
        </div>
      </div>
    );
  }
}

export default SubjectPost;
