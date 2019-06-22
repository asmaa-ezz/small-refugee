import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import styled from "styled-components";
import { Login } from "../../store/action/actionCreator/actionAuth";

const FormStyle = styled.form`
  margin-top: 10%;
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
    .min(1)
});

class SignIn extends Component {
  handleSubmitSignIn = values => {
    this.props.Login(values);
  };
  handleResrtPasswordButton = e => {
    window.location = "/reset-password";
  };

  render() {
    if (this.props.authError) {
      console.log(this.props.authError);
      Swal.fire({
        type: "error",
        title: "Error!",
        text: this.props.authError
      });
    }
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={userSchema}
        onSubmit={values => {
          this.handleSubmitSignIn(values);
        }}
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

            <div className="form-group">
              <label htmlFor="password">Password</label>
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

            <button
              type="submit"
              disabled={!props.dirty && !props.isSubmitting}
              className="btn btn-primary"
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-link"
              onClick={e => this.handleResrtPasswordButton(e)}
            >
              Reset Password
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
    Login: data => dispatch(Login(data))
  };
};

export default connect(
  mapStatusToProps,
  mapDspatchToProps
)(SignIn);
