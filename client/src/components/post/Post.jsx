import React, { Component } from "react";
import { Link } from "react-router-dom";
import CreateComment from "./CreateComment";
import ListComments from "./ListComments";

class Post extends Component {
  state = {
    viewComment: false
  };
  handleSubject = title => {
    window.location = `/posts/${title}`;
  };

  handleCommet = () => {
    this.setState(prevState => ({
      viewComment: !prevState.viewComment
    }));
  };

  render() {
    const {
      id,
      user_first_name,
      user_last_name,
      text,
      subject_title,
      likes,
      comment_count,
      user_username,
      url
    } = this.props.data;
    return (
      <div className="card" style={{ margin: "10px" }}>
        <div className="card-header">
          <Link to={`/username/${user_username}`}>
            {user_first_name} {user_last_name}
          </Link>
        </div>
        <div className="card-body">
          <p className="card-text">{text}</p>
          {subject_title && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.handleSubject(subject_title)}
            >
              {subject_title}
            </button>
          )}
          <br />
          <hr />
          <div>likes: {likes}</div>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => this.handleCommet()}
          >
            {comment_count} Comment
          </button>
        </div>
        {this.state.viewComment && (
          <div>
            <CreateComment url={url} />
            <ListComments id={id} />
          </div>
        )}
      </div>
    );
  }
}

export default Post;
