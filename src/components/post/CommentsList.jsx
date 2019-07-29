import React, { Component } from "react";
import styled from "styled-components";
import Moment from "react-moment";
import UserDefault from "../../assets/image/UserDefault.png";
import LikePost from "./LikePost";
import Swal from "sweetalert2";
import {
  DeletePostComment,
  EditPostComment
} from "../../store/action/actionCreator/actionPost";
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
    const { list, history } = this.props;
    const comments =
      list &&
      list.map(comment => {
        return (
          <DivComment key={comment.id}>
            <HeaderComment className="header">
              <UserInfo className="user-name">
                {/* {!comment.user_avatar.includes("images") ? (
                <ImgUser
                  src={comment.user_avatar}
                  alt="user-img"
                  onClick={() => {
                    history.push(`/username/${comment.user_username}`);
                  }}
                />
              ) : ( */}
                <ImgUser
                  src={UserDefault}
                  alt="user-img"
                  onClick={() => {
                    history.push(`/username/${comment.user_username}`);
                  }}
                />
                {/* )} */}
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
                <LikePost
                  isLike={comment.is_liked}
                  countLike={comment.likes_count}
                />
                {this.props.isUser && (
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
                          onClick={() =>
                            this.handleEdit(comment.id, comment.text)
                          }
                        >
                          تعديل
                        </button>
                        <button
                          style={{ cursor: "pointer" }}
                          className="dropdown-item"
                          type="button"
                          onClick={() => this.handleDelet(comment.id)}
                        >
                          حذف
                        </button>
                      </div>
                    </div>
                  </div>
                )}
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
