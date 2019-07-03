import React, { Component } from "react";
import StaticList from "../Common/StaticList";

class OtherLink extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-2">
            <StaticList click="other" />
          </div>
          <div className="col-6" />
          <div className="col-4" />
        </div>
      </div>
    );
  }
}

export default OtherLink;
