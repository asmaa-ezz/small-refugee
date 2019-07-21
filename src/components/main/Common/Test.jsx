import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import ButtonLesson from "../../common/ButtonLesson";
import Quiz from "../../common/Quiz";

import { CARDTITLE, TURQUOISE } from "../../../constant/Color";
import { GetQuiz } from "../../../store/action/actionCreator/actionQuiz";

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

class Test extends Component {
  state = {
    data: ""
  };
  componentDidMount() {
    this.props.GetQuiz(this.props.id);
  }
  render() {
    return (
      <div>
        <Div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Body style={{ marginLeft: "40px" }}>
              <Title>اللغة العربية</Title>
              <Text>الصف الرابع الإبتدائي</Text>
            </Body>
            <Body style={{ marginLeft: "40px" }}>
              <Title>الوحدةالأولى</Title>
              <Text>عنوان الوحدة</Text>
            </Body>
            <Body>
              <Title style={{ marginBottom: "20px" }}>الإختبار</Title>
            </Body>
          </div>
        </Div>
        <div className="row">
          <div className="col-3" style={{ paddingBottom: "10px" }}>
            {this.props.listQuiz &&
              this.props.listQuiz.map(item => {
                return (
                  <ButtonLesson
                    handleButton={data => {
                      console.log(data);

                      this.setState({
                        data: data
                      });

                      // const dataOnes = this.state.videos.filter(item => {
                      //   return item.id === data.id;
                      // });
                      // dataOnes.length < 1 &&
                      //   this.setState({
                      //     videos: [...this.state.videos, data],
                      //     id: data.id
                      //   });
                    }}
                    data={item}
                    isView={item.isView}
                    key={item.id}
                    text="السؤال الأول"
                  />
                );
              })}
          </div>
          <div className="col-9">
            {this.state.data ? (
              <Quiz data={this.state.data} />
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
    listQuiz: state.quiz.listQuiz
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetQuiz: id => dispatch(GetQuiz(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
