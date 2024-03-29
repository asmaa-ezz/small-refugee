import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

class Comment extends Component {
  render() {
    const {
      user_first_name,
      user_last_name,
      user_username,
      text,
      likes,
      created_at
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
        {user_first_name && (
          <React.Fragment>
            <Link to={`/username/${user_username}`}>
              {user_first_name} {user_last_name}
            </Link>
            <Moment fromNow ago className="form-text small text-black-50">
              {created_at}
            </Moment>
            <div>{text}</div>
            <div>likes: {likes}</div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Comment;
