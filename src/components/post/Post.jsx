import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import CreateComment from "./CreateComment";
import ListComments from "./ListComments";

class Post extends Component {
  state = {
    viewComment: false
  };
  handleSubject = title => {
    window.location = `/posts/${title}`;
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
    const {
      id,
      user_first_name,
      user_last_name,
      text,
      subject_title,
      likes,
      comment_count,
      user_username,
      url,
      created_at
    } = this.props.data;
    return (
      <div className="card" style={{ margin: "10px" }}>
        <div className="card-header d-flex justify-content-between">
          <div style={{ width: "50%" }}>
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
          )}
        </div>

        <div className="card-body">
          <p className="card-text">{text}</p>
          {subject_title && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.handleSubject(subject_title)}
            >
              {subject_title}
            </button>
          )}
          <br />
          <hr />
          <div>likes: {likes}</div>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => this.handleCommet()}
          >
            {comment_count} Comment
          </button>
        </div>
        {this.state.viewComment && (
          <div>
            <CreateComment url={url} />
            <ListComments id={id} />
          </div>
        )}
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
