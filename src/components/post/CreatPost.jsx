import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import ListSubject from "../common/ListSubject";
import { AddPost } from "../../store/action/actionCreator/actionPost";
import Post from "./Post";

const postSchema = Yup.object().shape({
  text: Yup.string("الحقل يجب أن يكون نص")
    .required("الحقل مطلوب")
    .max(1000, "يجب أن لا يزيد النص عن 1000 حرف")
    .min(2, "يجب أن لا يقل الحنص عن 2 حرف")
});

const FormStyle = styled.form`
  margin-top: 5%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5%;
  outline: none;
`;

class CreatPost extends Component {
  handleSubmitCreatPost = values => {
    if (values.subject === "اختر مادة") values.subject = null;
    this.props.AddPost(values);
  };

  render() {
    return (
      <Formik
        initialValues={{ text: "", subject: "" }}
        validationSchema={postSchema}
        onSubmit={values => {
          this.handleSubmitCreatPost(values);
        }}
      >
        {props => (
          <form
            onSubmit={props.handleSubmit}
            style={{ background: "#fff", borderRadius: "5px" }}
            className="container"
          >
            <div className="form-group">
              <div className="user">
                {this.props.user && (
                  <img
                    src={this.props.user.avatar}
                    alt="img"
                    style={{ borderRadius: "50%", width: "8%", margin: "2%" }}
                  />
                )}
                <span>
                  {this.props.user &&
                    `${this.props.user.first_name} ${
                      this.props.user.last_name
                    }`}
                </span>
              </div>
              <Field
                type="textarea"
                component="textarea"
                placeholder="شارك العالم أفكارك الجميلة"
                onChange={props.handleChange}
                name="text"
                value={props.values.text}
                className="form-control"
                style={{ border: "none", width: "80%", marginRight: "10%" }}
              />
              {props.errors.text && props.touched.text ? (
                <span className="form-text text-danger small">
                  {props.errors.text}
                </span>
              ) : (
                ""
              )}
            </div>
            <hr style={{ width: "106%", marginRight: "-3%" }} />
            <div className="row">
              <div className="col-3 form-group">
                <ListSubject values={props.values} />
              </div>

              <div className="col-3 form-group">
                <button
                  type="submit"
                  disabled={!props.dirty && !props.isSubmitting}
                  className="btn btn-secondary"
                >
                  أرفق صورة
                </button>
              </div>

              <div className="col-3 form-group">
                <button
                  type="submit"
                  disabled={!props.dirty && !props.isSubmitting}
                  className="btn btn-secondary"
                >
                  أرفق ملف
                </button>
              </div>

              <div className="col-3 form-group">
                <button
                  type="submit"
                  disabled={!props.dirty && !props.isSubmitting}
                  className="btn btn-primary"
                >
                  نشر
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    );
  }
}

const mapStatusToProps = state => {
  return {
    user: state.auth.user,
    newPost: state.post.newPost
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AddPost: data => dispatch(AddPost(data))
  };
};

export default connect(
  mapStatusToProps,
  mapDispatchToProps
)(CreatPost);
