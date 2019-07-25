import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { GetAllSubject } from "../../../store/action/actionCreator/actionPost";
import CardLearn from "../../common/CardLearn";
import ButtonBorde from "../../common/ButtonBorde";
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

class ListSubjects extends Component {
  componentDidMount() {
    this.props.GetAllSubject();
  }

  render() {
    const subjects = this.props.subject ? (
      <div>
        <Div>
          <Body>
            <Title>المواد الدراسية للصف الرابع الإبتدائي</Title>
          </Body>
          <Body>
            <ButtonBorde
              path="/"
              text={
                true ? "شهادة الصف الرابع غير متاحة" : "شهادة الصف الرابع متاحة"
              }
              height={"40px"}
              padding="5px 20px"
              marginTop="4px"
              backgroundColor={CARDTITLE}
            />
          </Body>
        </Div>
        {this.props.subject.map(item => {
          return (
            <CardLearn
              key={item.id}
              id={item.id}
              history={this.props.history}
              title={item.title}
              stage={"الصف الرابع الإبتدائي"}
              staticDetalis={"الوحدة الحالية"}
              details={"الوحدة الأولى"}
              achieve={20}
              exam={item.exam}
            />
          );
        })}
      </div>
    ) : (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );

    return <React.Fragment>{subjects}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    subject: state.post.subject
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetAllSubject: () => dispatch(GetAllSubject())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListSubjects);
