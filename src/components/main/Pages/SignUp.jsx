import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import styled from "styled-components";
import { Register } from "../../../store/action/actionCreator/actionAuth";

const FormStyle = styled.form`
  margin-top: 1%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1%;
  outline: none;
`;

const userSchema = Yup.object().shape({
  email: Yup.string()
    .email("عنوان البريد الإلكتروني غير صالح")
    .required("الحقل مطلوب"),
  password: Yup.string()
    .required("الحقل مطلوب")
    .max(20, "يجب أن يكون كلمة المرور مكون من 20 حرف على الأكثر")
    .min(3, "يجب أن يكون كلمة المرور مكون من 3 حروف على الأقل"),
  username: Yup.string()
    .required("الحقل مطلوب")
    .max(20, "يجب أن يكون اسم المستخدم مكون من 20 حرف على الأكثر")
    .min(3, "يجب أن يكون اسم المستخدم مكون من 3 حروف على الأقل"),
  first_name: Yup.string()
    .required("الحقل مطلوب")
    .max(20, "يجب أن يكون الاسم الأول مكون من 20 حرف على الأكثر")
    .min(1, "يجب أن يكون الاسم الأول مكون من 1 حرف على الأقل"),
  last_name: Yup.string()
    .required("الحقل مطلوب")
    .max(20, "يجب أن يكون الاسم الأخير مكون من 20 حرف على الأكثر")
    .min(1, "يجب أن يكون الاسم الأخير مكون من 1 حرف على الأقل")
});

class SignUp extends Component {
  handleSubmitSignUp = values => {
    this.props.Register(values);
  };

  render() {
    if (this.props.authError) {
      let massege = "";
      const data = JSON.parse(this.props.authError);
      if (data.email) {
        massege = data.email[0].includes("email already exists")
          ? "عنوان البريد الالكتروني موجود سابقا"
          : data.email;
      } else if (data.username) {
        massege = data.username[0].includes("username already exists")
          ? "إسم المستخدم موجود سابقا"
          : data.username;
      } else {
        massege = data;
      }

      Swal.fire({
        type: "error",
        title: "خطأ!",
        text: massege
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
                placeholder="أدحل البريد الالكتروني"
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
