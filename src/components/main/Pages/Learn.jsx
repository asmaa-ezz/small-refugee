import React, { Component } from "react";
import StaticList from "../Common/StaticList";
import ListSubject from "../Common/ListSubject";

class Learn extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-2">
            <StaticList click="learn" />
          </div>
          <div className="col-6" />
          <div className="col-4">
            <ListSubject />
          </div>
        </div>
      </div>
    );
  }
}

export default Learn;
