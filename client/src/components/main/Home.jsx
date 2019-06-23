import React, { Component } from "react";
import Post from "../post";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div>Home Page</div>
        <Post />
      </React.Fragment>
    );
  }
}

export default Home;
