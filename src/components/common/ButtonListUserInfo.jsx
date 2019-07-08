import React from "react";
import styled from "styled-components";
import { PURPLE } from "../../constant/Color";

const ButtonSection = styled.div`
  font-family: Cairo, sans-serif;
  font-size: 12px;
  font-weight: 800;
  height: 48px;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
}
`;

const focus = {
  color: "#fff",
  background: PURPLE
};

const normal = {
  color: PURPLE
};

const ButtonListUserInfo = ({ history, text, path, isFocus }) => {
  return (
    <ButtonSection
      className="share"
      onClick={() => {
        history.push(path);
      }}
      style={isFocus ? focus : normal}
    >
      {text}
    </ButtonSection>
  );
};

export default ButtonListUserInfo;
