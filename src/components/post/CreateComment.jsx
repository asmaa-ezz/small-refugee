import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { AddCommentPost } from "../../store/action/actionCreator/actionPost";
import Comment from "./Comment";

const FormStyle = styled.form`
  margin-top: 5%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5%;
  outline: none;
`;

const commentSchema = Yup.object().shape({
  text: Yup.string()
    .required()
    .min(1)
    .max(200)
});

class CreateComment extends Component {
  handleSubmitComment = values => {
    const data = {
      text: values.text,
      post: this.props.url
    };
    this.props.AddCommentPost(data);
  };
  render() {
    return (
      <Formik
        initialValues={{ text: "" }}
        validationSchema={commentSchema}
        onSubmit={values => this.handleSubmitComment(values)}
      >
        {props => (
          <FormStyle onSubmit={props.handleSubmit}>
            <div className="form-group">
              <Field
                type="text"
                placeholder="Enter comment"
                onChange={props.handleChange}
                name="text"
                value={props.values.text}
                className="form-control"
              />
              {props.errors.text && props.touched.text ? (
                <span className="form-text text-danger small">
                  {props.errors.text}
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
    newComment: state.post.newComment
  };
};

const mapdispatchToProps = dispatch => {
  return {
    AddCommentPost: data => dispatch(AddCommentPost(data))
  };
};

export default connect(
  mapStatusToProps,
  mapdispatchToProps
)(CreateComment);
