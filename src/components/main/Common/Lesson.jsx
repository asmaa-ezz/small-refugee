import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ButtonBorde from "../../common/ButtonBorde";
import ButtonLesson from "../../common/ButtonLesson";

import Video from "../../common/Video";
import { GetLessons } from "../../../store/action/actionCreator/actionLesson";
import { CARDTITLE, TURQUOISE } from "../../../constant/Color";

const Div = styled.div`
  background-color: ${CARDTITLE};
  border-radius: 5px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  font-family: Cairo, sans-serif;
  color: #fff;
  height: 75px;
  margin-bottom: 20px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

const Text = styled.div`
  font-size: 12px;
`;

class Lesson extends Component {
  state = {
    video:
      "https://small-refugee.herokuapp.com/media/videos/CGI_Animated_Short_Film-_Watermelon_A_Cautionary_Tale_by_Kefei_Li__Connie_Qin_He__ttE1AUh.mp4"
  };
  componentDidMount() {
    this.props.GetLessons(this.props.id);
  }
  render() {
    const render = this.props.lessons ? (
      <div>
        <Div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Body style={{ marginLeft: "40px" }}>
              <Title>{this.props.lessons.subject_title}</Title>
              <Text>الصف الرابع الإبتدائي</Text>
            </Body>
            <Body>
              <Title>{this.props.lessons.name}</Title>
              <Text>عنوان الوحدة</Text>
            </Body>
          </div>

          <Body>
            <ButtonBorde
              path="/"
              text={"إختبار الوحدة"}
              height={"40px"}
              padding="5px 45px"
              marginTop="4px"
              backgroundColor={CARDTITLE}
            />
          </Body>
        </Div>
        <div className="row">
          <div className="col-3" style={{ paddingBottom: "10px" }}>
            {this.props.lessons.lesson_set.map(item => {
              return (
                <ButtonLesson
                  handleLessonVido={data => {
                    this.setState({ video: data.video });
                  }}
                  data={item}
                  isFocus={item.id === 1 ? true : false}
                  key={item.id}
                  text="عنوان الدرس"
                />
              );
            })}
          </div>
          <div className="col-9">
            <Video videoURL={this.state.video} />
            <Div
              style={{
                backgroundColor: TURQUOISE,
                marginTop: "10px",
                height: "93px"
              }}
            >
              <Body>
                <Text style={{ fontSize: "18px" }}>
                  انهيت الدرس دعنا نتأكد من فهمك للمحتوى
                </Text>
                <Text style={{ fontSize: "18px" }}>
                  لن تتجاوز الدرس إلا بعد اجتياز الاختبار
                </Text>
              </Body>

              <Body>
                <Link
                  to="/"
                  style={{
                    backgroundColor: "#fff",
                    color: TURQUOISE,
                    height: "45px",
                    padding: "5px 30px",
                    textAlign: "center",
                    borderRadius: "20px",
                    fontFamily: "Cairo, sans-serif",
                    justifyContent: "center"
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "18px",
                      marginTop: "4px"
                    }}
                  >
                    إبدأ الإختبار
                  </p>
                </Link>
              </Body>
            </Div>
          </div>
        </div>
      </div>
    ) : (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );

    return <React.Fragment>{render}</React.Fragment>;
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
