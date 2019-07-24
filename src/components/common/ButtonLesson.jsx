import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { OpenLessonClikButton } from "../../store/action/actionCreator/actionLesson";
import { GREEN, BORDER } from "../../constant/Color";

const Div = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-start;
  font-family: Cairo, sans-serif;
  height: 40px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background-color: ${GREEN};
  border: 2px solid #fff;
  margin-left: 10px;
`;

const Text = styled.div`
  color: ${BORDER};
  font-size: 15px;
`;

const focus = {
  backgroundColor: GREEN
};

const focusText = {
  color: "#fff"
};

class ButtonLesson extends Component {
  state = {
    isFocus: false
  };

  render() {
    console.log("bbb", this.props);

    const { data, text, isView, handleButton, id } = this.props;
    const { isFocus } = this.state;
    return (
      <Div
        // style={isFocus && focus}
        onClick={() => {
          handleButton(data);
          this.setState({ isFocus: true });
        }}
      >
        <Circle />
        <Text
        // style={isFocus && focusText}
        >
          {text}
        </Text>
      </Div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     OpenLessonClikButton: data => dispatch(OpenLessonClikButton(data))
//   };
// };

export default ButtonLesson;

// export default connect(
//   null,
//   mapDispatchToProps
// )(ButtonLesson);
