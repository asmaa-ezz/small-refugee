import React from "react";
import styled from "styled-components";
import { CARDTITLE, TURQUOISE } from "../../constant/Color";

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
`;

const Choose = ({ text, id }) => {
  return <Div onClick={() => {}}>{text}</Div>;
};

export default Choose;
