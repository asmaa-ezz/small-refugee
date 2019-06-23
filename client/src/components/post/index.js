import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import ListSubject from '../common/ListSubject';
import { AddPost } from '../../store/action/actionCreator/actionPost'

const postSchema = Yup.object().shape({
  postText: Yup.string()
    .required()
    .max(1000)
    .min(2),
});

const FormStyle = styled.form`
  margin-top: 5%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5%;
  outline: none;
`;

class Post extends Component {
  handleSubmitCreatPost = values => {
    if (values.supject === 'Select subject...') values.supject = ""
    this.props.AddPost(values)
  }
  render() {
    return (
      <Formik
        initialValues={{ postText: "", supject: "" }}
        validationSchema={postSchema}
        onSubmit={values => {
          this.handleSubmitCreatPost(values);
        }}
      >
        {props => (
          <FormStyle onSubmit={props.handleSubmit}>
            <div className="form-group">
              <label htmlFor="postText">Post text: </label>
              <Field
                type="textarea"
                component='textarea'
                placeholder="Enter post"
                onChange={props.handleChange}
                name="postText"
                value={props.values.postText}
                className="form-control"
              />
              {props.errors.postText && props.touched.postText ? (
                <span className="form-text text-danger small">
                  {props.errors.postText}
                </span>
              ) : (
                  ""
                )}
            </div>

            <div className="form-group">
              <ListSubject />
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
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    AddPost: data => dispatch(AddPost(data))
  }
}
export default connect(null, mapDispatchToProps)(Post);
