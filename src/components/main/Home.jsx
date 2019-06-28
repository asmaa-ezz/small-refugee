import React, { Component } from "react";
import CreatPost from "../post/CreatPost";
import ListPosts from "../post/ListPosts";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <CreatPost />
        <br />
        <hr />
        <ListPosts />
      </React.Fragment>
    );
  }
}

export default Home;
