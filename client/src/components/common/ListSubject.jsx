import React, { Component } from "react";
import { connect } from "react-redux";
import { GetAllSubject } from "../../store/action/actionCreator/actionPost";

class ListSubject extends Component {
  componentDidMount() {
    this.props.GetAllSubject();
  }
  render() {
    const mapSelect =
      this.props.subject &&
      this.props.subject.map(item => {
        return <option key={item.id}>{item.title}</option>;
      });

    return (
      <React.Fragment>
        <select className="form-control">
          <option key={0}>Select subject...</option>
          {mapSelect}
        </select>
      </React.Fragment>
    );
  }
}

const mapStatusToProps = state => {
  return {
    subject: state.post.subject
  };
};

const mapDspatchToProps = dispatch => {
  return {
    GetAllSubject: () => dispatch(GetAllSubject())
  };
};

export default connect(
  mapStatusToProps,
  mapDspatchToProps
)(ListSubject);
