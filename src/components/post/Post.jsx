import React, { Component } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import Moment from "react-moment";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import CreateComment from "./CreateComment";
import ListComments from "./ListComments";
import CommentsList from "./CommentsList";
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

class Post extends Component {
  state = {
    viewComment: false
  };

  handleCommet = () => {
    this.setState(prevState => ({
      viewComment: !prevState.viewComment
    }));
  };

  handleEdit = (idPost, text, subject) => {
    Swal.fire({
      title: "Edit Post",
      html:
        `<input id="swal-input1" class="swal2-input" placeholder="Enter post" value='${text}'>` +
        `<input id="swal-input2" class="swal2-input" placeholder="Enter subject" value='${subject}'>`,
      focusConfirm: false,
      preConfirm: () => {
        return {
          text: document.getElementById("swal-input1").value,
          subject: document.getElementById("swal-input2").value,
          id: idPost
        };
      }
    }).then(result => {
      Swal.fire(JSON.stringify(result));
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
        // call API
        if (result.value) {
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
      comments
    } = this.props.data;

    return this.props.data ? (
      <DivPost>
        <HeaderPost className="header">
          <UserInfo className="user-name">
            {!user_avatar.includes("images") ? (
              <ImgUser
                src={user_avatar}
                alt="user-img"
                onClick={() => {
                  history.push(`/username/${user_username}`);
                }}
              />
            ) : (
              <ImgUser
                src={UserDefault}
                alt="user-img"
                onClick={() => {
                  history.push(`/username/${user_username}`);
                }}
              />
            )}
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
          {/* <div style={{ width: "50%" }}>
            <div
              style={{
                borderRadius: "50%",
                width: "35px",
                height: "35px",
                marginRight: "10px",
                background: "darkgray",
                display: "inline-block"
              }}
            />
            <Link to={`/username/${user_username}`}>
              {user_first_name} {user_last_name}
            </Link>
            <Moment fromNow ago className="form-text small text-black-50">
              {created_at}
            </Moment>
          </div>
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
                >
                  Dropdown
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => this.handleEdit(id, text, subject_title)}
                  >
                    Edit
                  </button>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => this.handleDelet(id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )} */}
        </HeaderPost>

        <div className="body">
          <TextPost>{text}</TextPost>

          {/* <p className="text">{text}</p>
          <div>likes: {likes}</div>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => this.handleCommet()}
          >
            {comment_count} Comment
          </button> */}
        </div>
        <hr style={{ width: "106%", marginRight: "-15px" }} />
        <CommentsList list={comments} history={history} />
        {this.props.dataStitic && (
          <CreateComment
            url={url}
            id={id}
            history={history}
            dataStitic={this.props.dataStitic}
          />
        )}

        {/* {this.state.viewComment && (
          <div>
            <CreateComment url={url} id={id} />
            <ListComments id={id} />
          </div>
        )} */}
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
export default connect(mapStateToProps)(Post);
