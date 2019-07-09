import React, { Component } from "react";
import UserInfoPage from "../../common/UserInfoPage";
import Units from "../Common/Units";

class UnitsPage extends Component {
  render() {
    const { history, match } = this.props;
    const { id } = match.params;

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
            <Units id={id} history={history} />
          </div>
        </div>
      </div>
    );
  }
}

export default UnitsPage;
