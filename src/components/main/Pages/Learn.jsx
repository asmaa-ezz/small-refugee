import React, { Component } from "react";
import StaticList from "../Common/StaticList";
import ListSubject from "../Common/ListSubject";
import ListSubjects from "../Common/ListSubjects";
import Units from "../Common/Units";
import Lesson from "../Common/Lesson";
import UserInfoPage from "../../common/UserInfoPage";

class Learn extends Component {
  render() {
    const { history } = this.props;
    const { userImage, fullName, stage } = this.props.dataStitic;

    console.log(this.props.history);
    const path = this.props.location.pathname.split("/");
    const id = path[path.length - 1];
    const render =
      path.length > 3 ? (
        // lesson
        <Lesson id={id} />
      ) : path.length > 2 ? (
        // unites
        <Units id={id} history={this.props.history} />
      ) : (
        // subject
        <div className="row">
          <div className="col-7">
            <ListSubjects history={this.props.history} />
          </div>
          <div className="col-5">
            <ListSubject />
          </div>
        </div>
      );

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
          <div className="col-10">{render}</div>
        </div>
      </div>
    );
  }
}

export default Learn;
