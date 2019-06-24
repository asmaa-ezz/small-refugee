import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import styled from "styled-components";
import { Register } from "../../store/action/actionCreator/actionAuth";

const FormStyle = styled.form`
  margin-top: 5%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5%;
  outline: none;
`;

const userSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .required()
    .max(20)
    .min(1),
  username: Yup.string()
    .required()
    .max(20)
    .min(3),
  firstName: Yup.string()
    .max(20)
    .min(1),
  lastName: Yup.string()
    .max(20)
    .min(1)
});

class SignUp extends Component {
  handleSubmitSignUp = values => {
    this.props.Register(values);
  };

  render() {
    if (this.props.authError) {
      Swal.fire({
        type: "error",
        title: "Error!",
        text: this.props.authError
      });
    }
    return (
      <Formik
        initialValues={{
          email: "",
          password: "",
          username: "",
          firstName: "",
          lastName: ""
        }}
        validationSchema={userSchema}
        onSubmit={values => {
          this.handleSubmitSignUp(values);
        }}
      >
        {props => (
          <FormStyle onSubmit={props.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address :</label>
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

            <div className="form-group">
              <label htmlFor="password">Password :</label>
              <Field
                type="password"
                onChange={props.handleChange}
                name="password"
                value={props.values.password}
                placeholder="Password"
                className="form-control"
              />
              {props.errors.password && props.touched.password ? (
                <span className="form-text text-danger small">
                  {props.errors.password}
                </span>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <label htmlFor="username">Username :</label>
              <Field
                type="text"
                onChange={props.handleChange}
                name="username"
                value={props.values.username}
                placeholder="Username"
                className="form-control"
              />
              {props.errors.username && props.touched.username ? (
                <span className="form-text text-danger small">
                  {props.errors.username}
                </span>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <label htmlFor="firstName">First name :</label>
              <Field
                type="text"
                onChange={props.handleChange}
                name="firstName"
                value={props.values.firstName}
                placeholder="First name"
                className="form-control"
              />
              {props.errors.firstName && props.touched.firstName ? (
                <span className="form-text text-danger small">
                  {props.errors.firstName}
                </span>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last name :</label>
              <Field
                type="text"
                onChange={props.handleChange}
                name="lastName"
                value={props.values.lastName}
                placeholder="Last name"
                className="form-control"
              />
              {props.errors.lastName && props.touched.lastName ? (
                <span className="form-text text-danger small">
                  {props.errors.lastName}
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
              Register
            </button>
          </FormStyle>
        )}
      </Formik>
    );
  }
}

const mapStatusToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDspatchToProps = dispatch => {
  return {
    Register: data => dispatch(Register(data))
  };
};

export default connect(
  mapStatusToProps,
  mapDspatchToProps
)(SignUp);
