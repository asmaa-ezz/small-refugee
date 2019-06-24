import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import ListSubject from "../common/ListSubject";
import { AddPost } from "../../store/action/actionCreator/actionPost";

const postSchema = Yup.object().shape({
  text: Yup.string()
    .required()
    .max(1000)
    .min(2)
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
    if (values.subject === "Select subject...") values.subject = null;
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
          <FormStyle onSubmit={props.handleSubmit}>
            <div className="form-group">
              <label htmlFor="text">Post text: </label>
              <Field
                type="textarea"
                component="textarea"
                placeholder="Enter post"
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

            <div className="form-group">
              <ListSubject values={props.values} />
            </div>

            <button
              type="submit"
              disabled={!props.dirty && !props.isSubmitting}
              className="btn btn-primary"
            >
              Create
            </button>
          </FormStyle>
        )}
      </Formik>
    );
  }
}

const mapStatusToProps = state => {
  return {
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
