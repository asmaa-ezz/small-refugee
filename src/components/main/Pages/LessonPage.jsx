import React, { Component } from "react";
import UserInfoPage from "../../common/UserInfoPage";
import Lesson from "../Common/Lesson";

class LessonPage extends Component {
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
            <Lesson id={1} />
          </div>
        </div>
      </div>
    );
  }
}

export default LessonPage;
