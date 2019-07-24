import React, { Component } from "react";
import styled from "styled-components";
import ButtonBorde from "../../common/ButtonBorde";
import ButtonLesson from "../../common/ButtonLesson";
import CardPageLesson from "../../common/CardPageLesson";
import PostCommentLesson from "../../common/PostCommentLesson";
import CreatePostLesson from "../../common/CreatePostLesson";

import Video from "../../common/Video";
import { CARDTITLE, TURQUOISE, ORANGE } from "../../../constant/Color";

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
    videos: []
  };
  componentDidMount() {
    this.props.lessons &&
      this.setState({
        videos: [...this.state.videos, this.props.lessons.lesson_set[0]],
        id: this.props.lessons.lesson_set[0].id,
        idQuiz: this.props.lessons.lesson_set[0].quiz
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.videos != nextState.videos;
  }

  render() {
    console.log("11", this.props.lessons);

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
                  handleButton={data => {
                    const dataOnes = this.state.videos.filter(item => {
                      return item.id === data.id;
                    });
                    console.log("mm", data);

                    dataOnes.length < 1 &&
                      this.setState({
                        videos: [...this.state.videos, data],
                        id: data.id,
                        idQuiz: data.quiz
                      });
                  }}
                  data={item}
                  isView={item.isView}
                  key={item.id}
                  id={item.id}
                  text="عنوان الدرس"
                />
              );
            })}
          </div>
          <div className="col-9">
            {this.props.lessons &&
              this.state.videos.map(item => {
                if (item.id === this.state.id) {
                  return (
                    <Video
                      url={
                        "http://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"
                      }
                    />
                  );
                } else return null;
              })}
            <CardPageLesson
              textButton={"إبدأ الإختبار"}
              text1="انهيت الدرس دعنا نتأكد من فهمك للمحتوى"
              text2="لن تتجاوز الدرس إلا بعد اجتياز الاختبار"
              color={TURQUOISE}
              handleClick={() => {
                this.props.history.push(
                  `/learn/${this.state.id}/${this.state.idQuiz}`
                );
              }}
            />
            <CardPageLesson
              handleClick={() => {
                this.props.history.push(`/`);
              }}
              textButton={"تحميل"}
              text1="لتحميل المادة الدراسية على شكل مستند رقمي"
              color={ORANGE}
            />
          </div>
        </div>
        <div>
          {this.state.id && (
            <React.Fragment>
              <CreatePostLesson id={this.state.id} />
              <br />
              <PostCommentLesson
                history={this.props.history}
                id={this.state.id}
                dataStitic={this.props.dataStitic}
              />
            </React.Fragment>
          )}
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

export default Lesson;
