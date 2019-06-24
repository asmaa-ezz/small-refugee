import React, { Component } from "react";
import ListPosts from "../post/ListPosts";

class UserProfile extends Component {
  render() {
    return <ListPosts usernameFilter={this.props.match.params.username} />;
  }
}

export default UserProfile;
