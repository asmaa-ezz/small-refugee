import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  AnswerQuiz,
  DoneTest
} from "../../store/action/actionCreator/actionQuiz";
import { CARDTITLE, PURPLE } from "../../constant/Color";

const Div = styled.div`
  height: 58px;
  background-color: ${CARDTITLE};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Cairo, sans-serif;
  color: #fff;
  border-radius: 5px;
  margin: 16px 0;
  cursor: pointer;
  &:hover {
    background-color: ${PURPLE};
  }
`;

class Choose extends Component {
  render() {
    const { text, idQuiz, idTest, end } = this.props;

    return (
      <Div
        onClick={() => {
          this.props.AnswerQuiz(idTest, idQuiz, text);
          end && this.props.DoneTest();
        }}
      >
        {text}
      </Div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quizAnswer: state.quiz.quizAnswer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AnswerQuiz: (idTest, idQuiz, text) =>
      dispatch(AnswerQuiz(idTest, idQuiz, text)),
    DoneTest: () => dispatch(DoneTest())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Choose);
