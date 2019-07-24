import React, { Component } from "react";
import { connect } from "react-redux";
// import { GetPosts } from "../../store/action/actionCreator/actionPost";
import PostLesson from "./PostLesson";

class PostCommentLesson extends Component {
  componentDidMount() {
    // this.props.GetPosts();
  }

  render() {
    const { history } = this.props;
    const mapPost = this.props.posts ? (
      this.props.posts.map(item => {
        return <PostLesson data={item} key={item.id} history={history} />;
      })
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
    // posts: state.post.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // GetPosts: () => dispatch(GetPosts())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCommentLesson);
