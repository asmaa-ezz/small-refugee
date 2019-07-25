import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import CardLearn from "../../common/CardLearn";
import ButtonBorde from "../../common/ButtonBorde";
import { GetAllUnits } from "../../../store/action/actionCreator/actionLesson";
import { CARDTITLE } from "../../../constant/Color";

const Div = styled.div`
  background-color: ${CARDTITLE};
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

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

const Text = styled.div`
  font-size: 12px;
`;

class Units extends Component {
  componentDidMount() {
    this.props.GetAllUnits(this.props.id);
  }
  render() {
    const render = this.props.units ? (
      <div>
        <Div>
          <Body>
            <Title>{this.props.units.title}</Title>
            <Text>الصف الرابع إبتدائي</Text>
          </Body>
          <Body>
            <ButtonBorde
              path="/"
              text={this.props.exam ? "إختبار المادة غير متاح" : "إختبر الأن"}
              height={"40px"}
              padding="5px 35px"
              marginTop="4px"
              backgroundColor={CARDTITLE}
            />
          </Body>
        </Div>

        {this.props.units.unit_set.map(item => {
          return (
            <CardLearn
              key={item.id}
              id={item.id}
              history={this.props.history}
              titleUnits={this.props.units.title}
              title={item.name}
              stage={"الصف الرابع الإبتدائي"}
              staticDetalis={"الدرس التالي"}
              details={"عنوان الدرس التالي"}
              achieve={item.achievement}
            />
          );
        })}
      </div>
    ) : (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );

    return <React.Fragment>{render}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    units: state.lesson.units
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetAllUnits: id => dispatch(GetAllUnits(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Units);
