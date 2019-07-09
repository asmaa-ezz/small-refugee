import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import styled from "styled-components";
import { Login } from "../../../store/action/actionCreator/actionAuth";

const FormStyle = styled.form`
  margin-top: 3%;
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
    .min(3, "يجب أن يكون كلمة المرور مكون من 3 حروف على الأقل")
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
      let massege = "";
      const data = JSON.parse(this.props.authError);
      if (
        data.includes("no user with this email") ||
        data.includes("authenticate")
      ) {
        massege = "عنوان البريد الإلكتورني أو كلمة المرور خطأ";
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
        initialValues={{ email: "", password: "" }}
        validationSchema={userSchema}
        onSubmit={values => {
          this.handleSubmitSignIn(values);
        }}
      >
        {props => (
          <FormStyle onSubmit={props.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">عنوان البريد الالكتروني:</label>
              <Field
                type="text"
                placeholder="أدخل البريد الالكتروني "
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
                placeholder="أدحل كلمة المرور"
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
              تسجيل
            </button>
            <button
              type="button"
              className="btn btn-link"
              onClick={e => this.handleResrtPasswordButton(e)}
            >
              نسيت كلمة المرور!
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
