import React, { Component } from "react";
import styled from "styled-components";
import Moment from "react-moment";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import CreateCommentLesson from "./CreateCommentLesson";
import CommentsListLesson from "./CommentsListLesson";
import { PURPLE, BORDER, TURQUOISE } from "../../constant/Color";
import Rating from "../../assets/image/Rating.png";
import UserDefault from "../../assets/image/UserDefault.png";

import {
  DeletePostLesson,
  EditPostLesson
} from "../../store/action/actionCreator/actionLesson";

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
        this.props.data &&
          this.props.EditPostLesson(id, text, this.props.data.lesson);
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
          this.props.DeletePostLesson(idPost);
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your post has been deleted.",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
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
            <RatingPost>
              <img src={Rating} alt="Rating" style={{ marginLeft: "4px" }} />
              <span style={{ color: "#fff", fontSize: "10px" }}>13</span>
            </RatingPost>
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
        <hr style={{ width: "103.4%", marginRight: "-15px" }} />
        {this.props.dataStitic && (
          <CommentsListLesson
            list={comments}
            id={id}
            history={history}
            dataStitic={this.props.dataStitic}
          />
        )}
        <CreateCommentLesson history={history} id={id} />
      </DivPost>
    ) : (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    DeletePostLesson: id => dispatch(DeletePostLesson(id)),
    EditPostLesson: (id, text, idLesson) =>
      dispatch(EditPostLesson(id, text, idLesson))
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
)(PostLesson);
