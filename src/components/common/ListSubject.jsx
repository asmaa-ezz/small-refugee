import React, { Component } from "react";
import { connect } from "react-redux";
import { Field } from "formik";
import { GetAllSubject } from "../../store/action/actionCreator/actionPost";

class ListSubject extends Component {
  componentDidMount() {
    this.props.GetAllSubject();
  }
  render() {
    const mapSelect =
      this.props.subject &&
      this.props.subject.map(item => {
        return (
          <option
            key={item.id}
            value={`https://small-refugee-app.herokuapp.com/main/subject/${
              item.id
            }/`}
          >
            {item.title}
          </option>
        );
      });

    return (
      <React.Fragment>
        <Field
          component="select"
          name="subject"
          className="form-control"
          value={this.props.values.subject}
          style={{
            outline: "none",
            height: "25px",
            width: "93px",
            fontSize: "9px",
            padding: "0 18px 0 0",
            backgroundColor: "#EDEEF0",
            borderRadius: "20px"
          }}
        >
          <option key={0} value={null}>
            إختر مــــادة
          </option>
          {mapSelect}
        </Field>
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
