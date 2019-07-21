import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import ButtonTest from "../../common/ButtonTest";
import Quiz from "../../common/Quiz";

import { CARDTITLE, TURQUOISE } from "../../../constant/Color";
import {
  GetQuiz,
  OpenNewQuiz
} from "../../../store/action/actionCreator/actionQuiz";

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

    this.props.listQuiz &&
      this.setState({
        data: this.props.listQuiz[0]
      });
  }
  render() {
    console.log("quizNow ", this.props.quizNow);

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
            {this.props.listQuiz ? (
              this.props.listQuiz.map(item => {
                return (
                  <ButtonTest
                    handleButton={id => {
                      this.props.OpenNewQuiz(id);
                    }}
                    id={item.id}
                    isView={item.isView}
                    key={item.id}
                    text="السؤال الأول"
                  />
                );
              })
            ) : (
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </div>
          <div className="col-9">
            {this.props.quizNow ? (
              <Quiz data={this.props.quizNow} />
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
    listQuiz: state.quiz.listQuiz,
    quizNow: state.quiz.quizNow
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetQuiz: id => dispatch(GetQuiz(id)),
    OpenNewQuiz: id => dispatch(OpenNewQuiz(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
