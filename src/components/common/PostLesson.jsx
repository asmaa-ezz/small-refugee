import React, { Component } from "react";
import styled from "styled-components";
import Moment from "react-moment";
import { connect } from "react-redux";
import CreateCommentLesson from "./CreateCommentLesson";
import CommentsListLesson from "./CommentsListLesson";
import { PURPLE, BORDER, TURQUOISE } from "../../constant/Color";
import Rating from "../../assets/image/Rating.png";
import UserDefault from "../../assets/image/UserDefault.png";

const DivPost = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 14px 14px 0 14px;
  font-family: Cairo, sans-serif;
  margin-bottom: 16px;
`;

const HeaderPost = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ImgUser = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  margin-left: 14px;
  cursor: pointer;
`;

const UserInfo = styled.div`
  display: flex;
  padding: 3px;
  justify-content: start;
`;

const Type = styled.div`
  display: flex;
  padding: 3px;
  justify-content: end;
`;

const TypeClass = styled.div`
  color: #fff;
  border-radius: 10px;
  font-size: 9px;
  background-color: ${BORDER};
  padding: 4px 14px;
  height: 21px;
  margin-left: 12px;
  cursor: pointer;
`;

const RatingPost = styled.div`
  background-color: ${TURQUOISE};
  border-radius: 10px;
  width: 38px;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextPost = styled.p`
  font-size: 12px;
  margin-right: 52px;
  margin-left: 10px;
  line-height: 2.1;
`;

class PostLesson extends Component {
  render() {
    const { history } = this.props;
    const {
      id,
      user_first_name,
      user_last_name,
      text,
      subject_title,
      user_username,
      url,
      created_at,
      comments
    } = this.props.data;

    return this.props.data ? (
      <DivPost>
        <HeaderPost className="header">
          <UserInfo className="user-name">
            <ImgUser
              src={UserDefault}
              alt="user-img"
              onClick={() => {
                history.push(`/username/${user_username}`);
              }}
            />
            <div
              onClick={() => {
                history.push(`/username/${user_username}`);
              }}
              style={{
                color: `${PURPLE}`,
                fontSize: "12px",
                fontWeight: 700,
                marginLeft: "8px",
                marginTop: "10px",
                cursor: "pointer"
              }}
            >
              {user_first_name} {user_last_name}
            </div>
            <Moment fromNow ago style={{ fontSize: "9px", marginTop: "12px" }}>
              {created_at}
            </Moment>
          </UserInfo>
          <Type className="type">
            {subject_title && (
              <TypeClass
                onClick={() => {
                  history.push(`/posts/${subject_title}`);
                }}
              >
                {subject_title}
              </TypeClass>
            )}
            <RatingPost>
              <img src={Rating} alt="Rating" style={{ marginLeft: "4px" }} />
              <span style={{ color: "#fff", fontSize: "10px" }}>13</span>
            </RatingPost>
          </Type>
        </HeaderPost>

        <div className="body">
          <TextPost>{text}</TextPost>
        </div>
        <hr style={{ width: "106%", marginRight: "-15px" }} />
        <CreateCommentLesson list={comments} history={history} />
        {this.props.dataStitic && (
          <CommentsListLesson
            url={url}
            id={id}
            history={history}
            dataStitic={this.props.dataStitic}
          />
        )}
      </DivPost>
    ) : (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
export default connect(mapStateToProps)(PostLesson);
