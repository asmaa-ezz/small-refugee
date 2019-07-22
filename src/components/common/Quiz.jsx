import React from "react";
import styled from "styled-components";

import Choose from "./Choose";
import { CARDTITLE, PURPLE } from "../../constant/Color";

const Div = styled.div`
  height: 152px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Cairo, sans-serif;
  border-radius: 5px;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: ${PURPLE};
`;

const Quiz = ({ data, idTest, lastId }) => {
  return (
    <div key={data.id}>
      <Div>
        <Title>{data.text}</Title>
      </Div>
      {data.choices.map(item => {
        return (
          <Choose
            text={item.text}
            key={item.id}
            idQuiz={data.id}
            idTest={idTest}
            end={lastId.id === data.id}
          />
        );
      })}
    </div>
  );
};

export default Quiz;
