import React, { Component } from "react";
import styled from "styled-components";
import Moment from "react-moment";
import UserDefault from "../../assets/image/UserDefault.png";
import RatingColor from "../../assets/image/RatingColor.png";

import { PURPLE, BORDER, TURQUOISE } from "../../constant/Color";

const DivComment = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 0 14px;
  font-family: Cairo, sans-serif;
  // margin-bottom: 16px;
`;

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

const Type = styled.div`
  display: flex;
  padding: 3px;
  justify-content: end;
`;

const RatingComment = styled.div`
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid ${TURQUOISE};
  width: 38px;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextComment = styled.p`
  font-size: 9px;
  margin-right: 40px;
  margin-left: 10px;
  line-height: 2.1;
`;

class CommentsList extends Component {
  render() {
    const { list, history } = this.props;
    console.log(list);

    const comments = list.map(comment => {
      return (
        <DivComment key={comment.id}>
          <HeaderComment className="header">
            <UserInfo className="user-name">
              {!comment.user_avatar.includes("images") ? (
                <ImgUser
                  src={comment.user_avatar}
                  alt="user-img"
                  onClick={() => {
                    history.push(`/username/${comment.user_username}`);
                  }}
                />
              ) : (
                <ImgUser
                  src={UserDefault}
                  alt="user-img"
                  onClick={() => {
                    history.push(`/username/${comment.user_username}`);
                  }}
                />
              )}
              <div
                onClick={() => {
                  history.push(`/username/${comment.user_username}`);
                }}
                style={{
                  color: `${PURPLE}`,
                  fontSize: "10px",
                  fontWeight: 700,
                  marginLeft: "8px",
                  marginTop: "10px",
                  cursor: "pointer"
                }}
              >
                {comment.user_first_name} {comment.user_last_name}
              </div>
              <Moment
                fromNow
                ago
                style={{ fontSize: "9px", marginTop: "12px" }}
              >
                {comment.created_at}
              </Moment>
            </UserInfo>
            <Type className="type">
              <RatingComment>
                <img src={RatingColor} alt="Rating" />
              </RatingComment>
            </Type>
          </HeaderComment>
          <div className="body">
            <TextComment>{comment.text}</TextComment>
          </div>
          <hr style={{ width: "112%", marginRight: "-29px" }} />
        </DivComment>
      );
    });

    return <React.Fragment>{comments}</React.Fragment>;
  }
}

export default CommentsList;
