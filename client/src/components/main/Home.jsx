import React, { Component } from "react";
import CreatPost from "../post/CreatPost";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div>Home Page</div>
        <CreatPost />
      </React.Fragment>
    );
  }
}

export default Home;
