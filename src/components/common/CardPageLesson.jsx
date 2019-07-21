import React from "react";
import styled from "styled-components";

const Div = styled.div`
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

const Text = styled.div`
  font-size: 12px;
`;

const CardPageLesson = ({ text1, text2, textButton, color, handleClick }) => {
  return (
    <Div
      style={{
        backgroundColor: color,
        marginTop: "10px",
        height: "93px"
      }}
    >
      <Body>
        <Text style={{ fontSize: "18px" }}>{text1}</Text>
        <Text style={{ fontSize: "18px" }}>{text2}</Text>
      </Body>

      <Body>
        <div
          style={{
            backgroundColor: "#fff",
            color: color,
            height: "45px",
            padding: "5px 0",
            textAlign: "center",
            borderRadius: "20px",
            fontFamily: "Cairo, sans-serif",
            justifyContent: "center",
            cursor: "pointer",
            width: "145px"
          }}
          onClick={() => {
            handleClick();
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: "18px",
              marginTop: "4px"
            }}
          >
            {textButton}
          </p>
        </div>
      </Body>
    </Div>
  );
};

export default CardPageLesson;
