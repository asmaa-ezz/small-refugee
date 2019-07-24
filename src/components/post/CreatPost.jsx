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
  background-color: #fff;
  border-radius: 5px;
  padding: 14px;
  font-family: Cairo, sans-serif;
`;

const Button = styled.button`
  align-items: center;
  height: 25px;
  width: 80px;
  color: #fff;
  border: none;
  background-color: #8283d9;
  border-radius: 5px;
  font-size: 12px;
  fontfamily: Cairo, sans-serif;
  cursor: pointer;
`;

class CreatPost extends Component {
  handleSubmitCreatPost = values => {
    if (values.subject === "إختر مــــادة") values.subject = null;
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
          <FormStyle
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
                    style={{
                      borderRadius: "50%",
                      width: "35px",
                      height: "35px",
                      marginLeft: "12px"
                    }}
                  />
                )}
                <span
                  style={{
                    color: "#8283D9",
                    fontSize: "12px",
                    fontWeight: 700
                  }}
                >
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
                style={{
                  border: "none",
                  width: "90%",
                  fontSize: "12px",
                  marginRight: "35px",
                  resize: "none"
                }}
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
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
                marginRight: "30px"
              }}
            >
              <div className="">
                <ListSubject values={props.values} />
              </div>
              <div className="">
                <Button
                  type="submit"
                  disabled={!props.dirty && !props.isSubmitting}
                >
                  نشر
                </Button>
              </div>
            </div>
          </FormStyle>
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
