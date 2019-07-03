import React, { Component } from "react";
import StaticList from "../Common/StaticList";

class Library extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-2">
            <StaticList click="library" />
          </div>
          <div className="col-6" />
          <div className="col-4" />
        </div>
      </div>
    );
  }
}

export default Library;
