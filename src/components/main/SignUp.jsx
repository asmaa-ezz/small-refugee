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
    .email("")
    .required("الحقل مطلوب"),
  password: Yup.string()
    .required("الحقل مطلوب")
    .max(20)
    .min(1),
  username: Yup.string()
    .required("الحقل مطلوب")
    .max(20)
    .min(3),
  first_name: Yup.string()
    .required("الحقل مطلوب")
    .max(20)
    .min(1),
  last_name: Yup.string()
    .required("الحقل مطلوب")
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
          first_name: "",
          last_name: ""
        }}
        validationSchema={userSchema}
        onSubmit={values => {
          this.handleSubmitSignUp(values);
        }}
      >
        {props => (
          <FormStyle onSubmit={props.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">عنوان البريد الالكتروني: </label>
              <Field
                type="email"
                placeholder="أدحل البريد الالكتروني :"
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
              <label htmlFor="password">كلمة المرور :</label>
              <Field
                type="password"
                onChange={props.handleChange}
                name="password"
                value={props.values.password}
                placeholder="أدخل كلمة المرور "
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
              <label htmlFor="username">إسم المستخدم :</label>
              <Field
                type="text"
                onChange={props.handleChange}
                name="username"
                value={props.values.username}
                placeholder="أدحل اسم المستخدم "
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
              <label htmlFor="first_name">الاسم الأول :</label>
              <Field
                type="text"
                onChange={props.handleChange}
                name="first_name"
                value={props.values.first_name}
                placeholder="الاسم الأول"
                className="form-control"
              />
              {props.errors.first_name && props.touched.first_name ? (
                <span className="form-text text-danger small">
                  {props.errors.first_name}
                </span>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <label htmlFor="last_name">الاسم الأخير : </label>
              <Field
                type="text"
                onChange={props.handleChange}
                name="last_name"
                value={props.values.last_name}
                placeholder="الاسم الأخير "
                className="form-control"
              />
              {props.errors.last_name && props.touched.last_name ? (
                <span className="form-text text-danger small">
                  {props.errors.last_name}
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
              انشاء حساب
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
