import React, { Component } from "react";
import { connect } from "react-redux";
import { GetLessons } from "../../../store/action/actionCreator/actionLesson";
import UserInfoPage from "../../common/UserInfoPage";
import Lesson from "../Common/Lesson";

class LessonPage extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.GetLessons(match.params.id);
  }
  render() {
    const { history } = this.props;
    const { userImage, fullName, stage } = this.props.dataStitic;
    return (
      <div className="container">
        <div className="row">
          <div className="col-2">
            <UserInfoPage
              history={history}
              image={userImage}
              fullName={fullName}
              type={stage}
            />
          </div>
          <div className="col-10">
            {this.props.lessons ? (
              <Lesson
                history={history}
                lessons={this.props.lessons}
                dataStitic={this.props.dataStitic}
              />
            ) : (
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </div>
        </div>
      </div>
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
)(LessonPage);
