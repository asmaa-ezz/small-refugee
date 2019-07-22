import React from "react";
import styled from "styled-components";

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

const CardResultTest = ({ isSuccessful }) => {
  return (
    <Div>
      {isSuccessful ? (
        <React.Fragment>
          <Text style={{ color: "#54D091" }}>
            مبارك لقد تجاوزت الإختبار بنجاح
          </Text>
          <DivButton
            onClick={() => {
              alert(0);
            }}
          >
            الإنتقال للدرس التالي
          </DivButton>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Text style={{ color: "#FF6666" }}>للأسف عليك المحاولة مرة أخرى</Text>
          <DivButton
            onClick={() => {
              alert(0);
            }}
          >
            حاول مرة أخرى
          </DivButton>
        </React.Fragment>
      )}
    </Div>
  );
};

export default CardResultTest;
