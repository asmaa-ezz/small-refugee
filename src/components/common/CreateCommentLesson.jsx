import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import UserDefault from "../../assets/image/UserDefault.png";

import { AddCommentPostLesson } from "../../store/action/actionCreator/actionLesson";

const HeaderComment = styled.div`
  display: flex;
  justify-content: space-between;
  width: 103%;
`;

const ImgUser = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  margin-left: 14px;
  cursor: pointer;
`;

const UserInfo = styled.div`
  display: flex;
  padding: 3px;
  justify-content: start;
`;

const FormStyle = styled.form`
  background-color: #edeef0;
  display: flex;
  justify-content: space-between;
  width: 103.3%;
  margin-top: -16px;
  margin-right: -14px;
  padding: 14px 26px 0 16px;
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
  margin-top: 22px;
  cursor: pointer;
`;

const commentSchema = Yup.object().shape({
  text: Yup.string()
    .required("الحقل مطلوب")
    .min(1)
    .max(200)
});

class CreateCommentLesson extends Component {
  handleSubmitComment = values => {
    const data = {
      text: values.text,
      lesson_post: this.props.id
    };
    this.props.AddCommentPostLesson(data);
  };
  render() {
    const { history } = this.props;
    return (
      <Formik
        initialValues={{ text: "" }}
        validationSchema={commentSchema}
        onSubmit={values => this.handleSubmitComment(values)}
      >
        {props => (
          <FormStyle onSubmit={props.handleSubmit}>
            <div className="form-group">
              <HeaderComment className="header">
                {this.props.user && (
                  <UserInfo className="user-name">
                    <ImgUser
                      src={this.props.user.avatar}
                      alt="user-img"
                      onClick={() => {
                        history.push(`/profile`);
                      }}
                    />
                    <div
                      onClick={() => {
                        history.push(`/profile`);
                      }}
                      style={{
                        color: "#8283D9",
                        fontSize: "10px",
                        fontWeight: 700,
                        marginLeft: "8px",
                        marginTop: "10px",
                        cursor: "pointer"
                      }}
                    >
                      {this.props.user.first_name}
                      {this.props.user.last_name}
                    </div>
                  </UserInfo>
                )}
              </HeaderComment>
              <Field
                type="text"
                placeholder="هل لديك أي إضافة ؟"
                onChange={props.handleChange}
                name="text"
                value={props.values.text}
                className="form-control"
                style={{
                  border: "none",
                  outline: "none",
                  background: "#EDEEF0",
                  fontFamily: "Cairo, sans-serif",
                  fontSize: "9px",
                  marginRight: "35px",
                  width: "390px"
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
            <Button
              type="submit"
              disabled={!props.dirty && !props.isSubmitting}
            >
              نشر
            </Button>
          </FormStyle>
        )}
      </Formik>
    );
  }
}
const mapStatusToProps = state => {
  return {
    user: state.auth.user
  };
};

const mapdispatchToProps = dispatch => {
  return {
    AddCommentPostLesson: data => dispatch(AddCommentPostLesson(data))
  };
};

export default connect(
  mapStatusToProps,
  mapdispatchToProps
)(CreateCommentLesson);
