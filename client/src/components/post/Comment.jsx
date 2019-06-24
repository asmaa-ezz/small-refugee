import React, { Component } from "react";
import { Link } from "react-router-dom";

class Comment extends Component {
  render() {
    const {
      user_first_name,
      user_last_name,
      user_username,
      text,
      likes
    } = this.props.data;
    return (
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          margin: "5px",
          padding: "10px"
        }}
      >
        <Link to={`/username/${user_username}`}>
          {user_first_name} {user_last_name}
        </Link>
        <div>{text}</div>
        <div>likes: {likes}</div>
      </div>
    );
  }
}

export default Comment;
