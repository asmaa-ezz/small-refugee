import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BORDER, PURPLE, GREEN } from "../../constant/Color";
import ButtonBorde from "./ButtonBorde";

const Div = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  font-family: Cairo, sans-serif;
  cursor: pointer;
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

const TextBoled = styled.div`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const CardLearn = ({
  title,
  stage,
  staticDetalis,
  details,
  achieve,
  history,
  id,
  titleUnits
}) => {
  return (
    <Div
      style={{ border: `1px solid ${BORDER}`, color: PURPLE }}
      onClick={() => {
        titleUnits
          ? history.push(`/learn/unit/${id}`)
          : history.push(`/learn/${id}`);
      }}
    >
      <div className="title">
        <Title>{title}</Title>
        <Text>{stage}</Text>
      </div>
      <Body>
        <TextBoled>{staticDetalis}</TextBoled>
        <Text>{details}</Text>
      </Body>
      <Body className="achieve" style={{ width: "40%", marginLeft: "-40px" }}>
        <TextBoled>الإنجاز</TextBoled>
        <div
          className="progress"
          style={{
            borderRadius: "50px",
            height: "14px"
          }}
        >
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${achieve}%`,
              borderRadius: "50px",
              backgroundColor: GREEN
            }}
            aria-valuenow={achieve}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      </Body>
      <Body className="next">
        <ButtonBorde
          path="/"
          text={achieve > 0 ? "إستمرار" : "إبدأ الأن"}
          height={"40px"}
          padding="5px 35px"
          marginTop="4px"
        />
      </Body>
    </Div>
  );
};

export default CardLearn;
