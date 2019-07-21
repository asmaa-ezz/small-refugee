import React, { Component } from "react";
import styled from "styled-components";
import ButtonBorde from "../../common/ButtonBorde";
import ButtonLesson from "../../common/ButtonLesson";
import CardPageLesson from "../../common/CardPageLesson";
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
        videos: [...this.state.videos, this.props.lessons.video_set[0]],
        id: this.props.lessons.video_set[0].id
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.videos != nextState.videos;
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
                  return <Video url={item.link} />;
                } else return null;
              })}
            <CardPageLesson
              textButton={"إبدأ الإختبار"}
              text1="انهيت الدرس دعنا نتأكد من فهمك للمحتوى"
              text2="لن تتجاوز الدرس إلا بعد اجتياز الاختبار"
              color={TURQUOISE}
              handleClick={() => {
                this.props.history.push(
                  `/learn/test/${this.props.lessons.lesson_set[0].quiz}`
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
