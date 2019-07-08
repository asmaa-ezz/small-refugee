import React, { Component } from "react";
import { connect } from "react-redux";
import Video from "../../common/Video";
import { GetLessons } from "../../../store/action/actionCreator/actionLesson";

class Lesson extends Component {
  componentDidMount() {
    this.props.GetLessons(this.props.id);
  }
  render() {
    const render = this.props.lessons ? (
      console.log(this.props.lessons)
    ) : (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );

    const { id } = this.props;
    return (
      <React.Fragment>
        {render}
        {/* <Video /> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    lessons: state.lesson.lessons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetLessons: id => dispatch(GetLessons(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lesson);
