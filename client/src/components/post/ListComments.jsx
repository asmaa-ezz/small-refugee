import React, { Component } from "react";
import { connect } from "react-redux";
import { GetCommentPost } from "../../store/action/actionCreator/actionPost";
import Comment from "./Comment";

class ListComments extends Component {
  componentDidMount() {
    this.props.GetCommentPost(this.props.id);
  }

  componentDidUpdate() {
    this.props.GetCommentPost(this.props.id);
  }

  render() {
    const comentsData =
      this.props.comments &&
      this.props.comments.map(item => {
        return <Comment data={item} key={item.id} />;
      });

    return <div>{comentsData}</div>;
  }
}

const mapStatusToProps = state => {
  return {
    comments: state.post.comments
  };
};

const mapdispatchToProps = dispatch => {
  return {
    GetCommentPost: id => dispatch(GetCommentPost(id))
  };
};

export default connect(
  mapStatusToProps,
  mapdispatchToProps
)(ListComments);
