import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PURPLE } from "../../../constant/Color";

const Title = styled.div`
  font-family: Cairo, sans-serif;
  color: ${PURPLE};
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%"
      }}
    >
      <Title>إبدأ رحلة التعلم من هنا</Title>
      <Link
        to="/sign-up"
        style={{
          backgroundColor: PURPLE,
          height: "62px",
          color: "#000",
          padding: "10px 80px",
          textAlign: "center",
          borderRadius: "5px",
          fontFamily: "Cairo, sans-serif"
        }}
      >
        <p style={{ fontSize: "26px", fontWeight: 700 }}>هيا بنا</p>
      </Link>
    </div>
  );
};

export default Home;
