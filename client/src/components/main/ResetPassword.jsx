import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { resetPasswordSendEmail } from "../../store/action/actionCreator/actionAuth";

const FormStyle = styled.form`
  margin-top: 5%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5%;
  outline: none;
`;

const emailSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required()
});

class ResetPassword extends Component {
  handleSubmitRest = values => {
    this.props.resetPasswordSendEmail(values);
  };
  render() {
    return (
      <Formik
        initialValues={{ email: "" }}
        validationSchema={emailSchema}
        onSubmit={values => this.handleSubmitRest(values)}
      >
        {props => (
          <FormStyle onSubmit={props.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <Field
                type="email"
                placeholder="Enter email"
                onChange={props.handleChange}
                name="email"
                value={props.values.email}
                className="form-control"
              />
              {props.errors.email && props.touched.email ? (
                <span className="form-text text-danger small">
                  {props.errors.email}
                </span>
              ) : (
                ""
              )}
            </div>
            <button
              type="submit"
              disabled={!props.dirty && !props.isSubmitting}
              className="btn btn-primary"
            >
              Send
            </button>
          </FormStyle>
        )}
      </Formik>
    );
  }
}

const mapStatusToProps = state => {
  return {
    massege: state.auth.massege
  };
};

const mapdispatchToProps = dispatch => {
  return {
    resetPasswordSendEmail: data => dispatch(resetPasswordSendEmail(data))
  };
};

export default connect(
  mapStatusToProps,
  mapdispatchToProps
)(ResetPassword);
