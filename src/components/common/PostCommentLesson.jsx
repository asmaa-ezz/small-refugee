import React, { Component } from "react";
import { connect } from "react-redux";
import { GetPostLesson } from "../../store/action/actionCreator/actionLesson";
import PostLesson from "./PostLesson";

class PostCommentLesson extends Component {
  componentDidMount() {
    this.props.GetPostLesson(this.props.id);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.id != nextProps.id;
  // }

  render() {
    const listDataFilter =
      this.props.listPostLesson &&
      this.props.listPostLesson.filter(item => {
        return item.lesson === this.props.id;
      });
    const { history } = this.props;
    const mapPost =
      this.props.listPostLesson &&
      listDataFilter.map(item => {
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
      });

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
