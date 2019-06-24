import React, { Component } from "react";
import ListPosts from "../post/ListPosts";

class SubjectPost extends Component {
  render() {
    return <ListPosts subjectFilter={this.props.match.params.title} />;
  }
}

export default SubjectPost;
