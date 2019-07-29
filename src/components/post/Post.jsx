import React, { Component } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import Moment from "react-moment";
import "moment/locale/ar";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import CreateComment from "./CreateComment";
import ListComments from "./ListComments";
import CommentsList from "./CommentsList";
import LikePost from "./LikePost";
import { PURPLE, BORDER, TURQUOISE } from "../../constant/Color";
import UserDefault from "../../assets/image/UserDefault.png";
import {
  DeletePost,
  EditPost
} from "../../store/action/actionCreator/actionPost";

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

const TextPost = styled.p`
  font-size: 12px;
  margin-right: 52px;
  margin-left: 10px;
  line-height: 2.1;
`;

class Post extends Component {
  handleEdit = (idPost, text, subject) => {
    Swal.fire({
      title: "Edit Post",
      html: `<input id="swal-input1" class="swal2-input" placeholder="Enter post" value='${text}'>`,
      focusConfirm: false,
      preConfirm: () => {
        return {
          data: {
            text: document.getElementById("swal-input1").value,
            id: idPost
          }
        };
      }
    })
      .then(res => JSON.stringify(res))
      .then(result => {
        const a = JSON.parse(result);
        const { id, text } = a.value.data;
        this.props.EditPost(id, text);
      });
  };

  handleDelet = idPost => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "Do you want to delete the Post?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      })
      .then(result => {
        if (result.value) {
          this.props.DeletePost(idPost);
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your post has been deleted.",
            "success"
          );
        } else if (
          // Read more about handling dismissals
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  render() {
    const { history } = this.props;
    const {
      id,
      user_first_name,
      user_last_name,
      text,
      subject_title,
      likes,
      comment_count,
      user_username,
      user_avatar,
      url,
      created_at,
      comments,
      is_liked,
      likes_count,
      like_id
    } = this.props.data;
    return (
      this.props.data && (
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
              <span
                style={{
                  fontSize: "9px",
                  marginTop: "12px",
                  marginLeft: "4px"
                }}
              >
                {" منذ"}
              </span>
              <Moment
                fromNow
                ago
                style={{ fontSize: "9px", marginTop: "12px" }}
              >
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
              <LikePost
                isLike={is_liked}
                countLike={likes_count}
                idPost={id}
                likeId={like_id}
              />

              {this.props.user && this.props.user.username === user_username && (
                <div className="text-right">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenu2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{
                        width: "20px",
                        height: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "none",
                        color: "rgb(130, 131, 217)",
                        border: "none",
                        fontSize: "30px",
                        outline: "none",
                        marginRight: "14px"
                      }}
                    />
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenu2"
                      style={{ minWidth: "90px" }}
                    >
                      <button
                        style={{ cursor: "pointer" }}
                        className="dropdown-item"
                        type="button"
                        onClick={() => this.handleEdit(id, text, subject_title)}
                      >
                        تعديل
                      </button>
                      <button
                        style={{ cursor: "pointer" }}
                        className="dropdown-item"
                        type="button"
                        onClick={() => this.handleDelet(id)}
                      >
                        حذف
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Type>
          </HeaderPost>
          <div className="body">
            <TextPost>{text}</TextPost>
          </div>
          <hr style={{ width: "106%", marginRight: "-15px" }} />
          <CommentsList
            idPost={id}
            list={comments}
            history={history}
            isUser={this.props.user.username === user_username}
          />
          {this.props.dataStitic && (
            <CreateComment
              url={url}
              id={id}
              history={history}
              dataStitic={this.props.dataStitic}
            />
          )}
        </DivPost>
      )
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    DeletePost: id => dispatch(DeletePost(id)),
    EditPost: (id, text) => dispatch(EditPost(id, text))
  };
};

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
