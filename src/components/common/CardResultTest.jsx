import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { FetchDoneTest } from "../../store/action/actionCreator/actionQuiz";

const Div = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Cairo, sans-serif;
  height: 307px;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const DivButton = styled.div`
  font-size: 20px;
  color: #8183d9;
  cursor: pointer;
`;

class CardResultTest extends Component {
  componentDidMount() {
    this.props.isSuccessful === true &&
      this.props.FetchDoneTest(this.props.idLesson);
  }
  render() {
    const { isSuccessful, history, unitId } = this.props;
    return (
      <Div>
        {isSuccessful ? (
          <React.Fragment>
            <Text style={{ color: "#54D091" }}>
              مبارك لقد تجاوزت الإختبار بنجاح
            </Text>
            {unitId && (
              <DivButton
                onClick={() => {
                  window.location = `/learn/unit/${unitId.id}`;
                }}
              >
                الإنتقال للدرس التالي
              </DivButton>
            )}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Text style={{ color: "#FF6666" }}>
              للأسف عليك المحاولة مرة أخرى
            </Text>
            <DivButton
              onClick={() => {
                window.location.reload();
              }}
            >
              حاول مرة أخرى
            </DivButton>
          </React.Fragment>
        )}
      </Div>
    );
  }
}

const mapStateToProps = state => {
  return {
    unitId: state.quiz.unitId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    FetchDoneTest: lessonId => dispatch(FetchDoneTest(lessonId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardResultTest);
