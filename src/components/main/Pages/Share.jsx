import React, { Component } from "react";
import StaticList from "../Common/StaticList";
import ListSubject from "../Common/ListSubject";
import CreatPost from "../../post/CreatPost";
import ListPosts from "../../post/ListPosts";

class Share extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-2">
            <StaticList click="share" />
          </div>
          <div className="col-6">
            <CreatPost />
            <br />
            <ListPosts />
          </div>
          <div className="col-4">
            <ListSubject />{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Share;
