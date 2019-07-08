import React, { Component } from "react";
import { connect } from "react-redux";
import { GetAllSubject } from "../../../store/action/actionCreator/actionPost";
import styled from "styled-components";

const DivSubject = styled.div`
  width: 40%;
  height: 10vh;
  background: #fff;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
`;

class ListSubjects extends Component {
  componentDidMount() {
    this.props.GetAllSubject();
  }

  handleSubject = id => {
    const { history } = this.props;
    history.push(`/learn/${id}`);
  };
  render() {
    const subjects = this.props.subject ? (
      this.props.subject.map(item => {
        return (
          <DivSubject key={item.id} onClick={() => this.handleSubject(item.id)}>
            <h1>{item.title}</h1>
          </DivSubject>
        );
      })
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
