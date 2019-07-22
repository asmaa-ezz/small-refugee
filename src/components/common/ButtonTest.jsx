import React, { Component } from "react";
import styled from "styled-components";
import { BACKGROUND, BORDER, PURPLE, GREEN2, RED } from "../../constant/Color";

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
  background-color: ${BACKGROUND};
  border: 2px solid #fff;
  margin-left: 10px;
`;

const Text = styled.div`
  color: ${BORDER};
  font-size: 15px;
`;

const focus = {
  backgroundColor: PURPLE
};

const focusText = {
  color: "#fff"
};

class ButtonTest extends Component {
  handleText = index => {
    switch (index) {
      case 0:
        return "السؤال الأول";
      case 1:
        return "السؤال الثاني";
      case 2:
        return "السؤال الثالث";
      case 3:
        return "السؤال الرابع";
      case 4:
        return "السؤال الخامس";
      default:
        return "السؤال";
    }
  };
  render() {
    const { id, index, isFocus, answer } = this.props;
    return (
      <Div style={isFocus ? focus : null}>
        <Circle
          style={
            isFocus
              ? focus
              : answer !== ""
              ? answer === true
                ? { backgroundColor: `${GREEN2}` }
                : { backgroundColor: `${RED}` }
              : null
          }
        />
        <Text style={isFocus ? focusText : null}>{this.handleText(index)}</Text>
      </Div>
    );
  }
}

export default ButtonTest;
