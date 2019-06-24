import React, { Component } from "react";
import { connect } from "react-redux";
import { GetPosts } from "../../store/action/actionCreator/actionPost";
import Post from "./Post";

class ListPosts extends Component {
  componentDidMount() {
    this.props.GetPosts();
  }
  componentDidUpdate() {
    this.props.GetPosts();
  }

  render() {
    const mapPost = this.props.posts ? (
      this.props.subjectFilter ? (
        this.props.posts.map(item => {
          if (item.subject_title === this.props.subjectFilter) {
            return <Post data={item} key={item.id} />;
          }
        })
      ) : this.props.usernameFilter ? (
        this.props.posts.map(item => {
          if (item.user_username === this.props.usernameFilter) {
            return <Post data={item} key={item.id} />;
          }
        })
      ) : (
        this.props.posts.map(item => {
          return <Post data={item} key={item.id} />;
        })
      )
    ) : (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );

    return <div>{mapPost}</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.post.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetPosts: () => dispatch(GetPosts())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPosts);
