import React, { Component } from "react";
import { connect } from "react-redux";
import { GetPostLesson } from "../../store/action/actionCreator/actionLesson";
import PostLesson from "./PostLesson";

class PostCommentLesson extends Component {
  componentDidMount() {
    this.props.GetPostLesson(this.props.id);
  }

  render() {
    console.log(this.props.listPostLesson && this.props.listPostLesson);

    const { history } = this.props;
    const mapPost = this.props.listPostLesson ? (
      this.props.listPostLesson.map(item => {
        return (
          <React.Fragment>
            <PostLesson
              data={item}
              key={item.id}
              history={history}
              dataStitic={this.props.dataStitic}
            />
          </React.Fragment>
        );
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
    listPostLesson: state.lesson.listPostLesson
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetPostLesson: id => dispatch(GetPostLesson(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCommentLesson);
