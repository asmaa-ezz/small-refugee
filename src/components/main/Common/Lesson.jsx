import React, { Component } from "react";
import { connect } from "react-redux";
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
    videos: [],
    link:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
  };
  componentDidMount() {
    this.props.GetLessons(this.props.id);
  }

  render() {
    console.log("wwww", this.props.history);

    const videoJsOptions = {
      controls: true,
      sources: [
        {
          src: this.state.link,
          type: "video/mp4"
        }
      ]
    };

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
            {this.props.lessons.video_set.map(item => {
              return (
                <ButtonLesson
                  handleButton={data => {
                    const dataOnes = this.state.videos.filter(item => {
                      return item.id === data.id;
                    });
                    dataOnes.length < 1 &&
                      this.setState({
                        videos: [...this.state.videos, data],
                        id: data.id
                      });
                  }}
                  data={item}
                  isView={item.isView}
                  key={item.id}
                  text="عنوان الدرس"
                />
              );
            })}
          </div>
          <div className="col-9">
            {this.state.videos &&
              this.state.videos.map(item => {
                if (item.id === this.state.id) {
                  return <Video url={item.link} />;
                } else return null;
              })}
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
                <div
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
                  onClick={() => {
                    const id =
                      this.props.lessons &&
                      this.props.lessons.lesson_set[0].quiz;
                    this.props.history.push(`/learn/test/${id}`);
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
                </div>
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
