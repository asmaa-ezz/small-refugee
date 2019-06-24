import React, { Component } from "react";
import { Link } from "react-router-dom";

class Post extends Component {
  handleSubject = title => {
    window.location = `/posts/${title}`;
  };

  render() {
    const {
      user_first_name,
      user_last_name,
      text,
      subject_title,
      likes,
      comment_count,
      user_username
    } = this.props.data;
    return (
      <div className="card">
        <div className="card-header">
          <Link to={`/username/${user_username}`}>
            {user_first_name} {user_last_name}
          </Link>
        </div>
        <div className="card-body">
          <p className="card-text">{text}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.handleSubject(subject_title)}
          >
            {subject_title}
          </button>
          <br />
          <hr />
          <div>likes: {likes}</div>
          <div>comment: {comment_count}</div>
        </div>
      </div>
    );
  }
}

export default Post;
