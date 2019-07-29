import React, { Component } from "react";
import styled from "styled-components";
import Rating from "../../assets/image/Rating.png";
import Rating2 from "../../assets/image/Rating2.png";
import { connect } from "react-redux";
import {
  AddLikeCommint,
  DeleteLikeCommint
} from "../../store/action/actionCreator/actionPost";
import { TURQUOISE } from "../../constant/Color";

const RatingPost = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 38px;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${TURQUOISE};
  border: 1px solid ${TURQUOISE};
  cursor: pointer;
`;

const isFocas = {
  backgroundColor: `${TURQUOISE}`,
  color: "#fff"
};

const count = {
  fontSize: "10px",
  fontWeight: 700
};

const countNull = {
  fontSize: "10px",
  marginRight: "4px",
  fontWeight: 700
};

class LikePostComment extends Component {
  handleLike() {
    const { isLike, idPost, likeId, idComment } = this.props;
    isLike
      ? this.props.DeleteLikeCommint(likeId, idComment, idPost)
      : this.props.AddLikeCommint(idComment, idPost);
  }
  render() {
    const { isLike, countLike } = this.props;
    return (
      <RatingPost
        onClick={() => this.handleLike()}
        style={isLike ? isFocas : null}
      >
        <img src={isLike ? Rating : Rating2} alt="Rating" />
        <span style={countLike < 1 ? count : countNull}>
          {countLike < 1 ? null : countLike}
        </span>
      </RatingPost>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    AddLikeCommint: (id, idPost) => dispatch(AddLikeCommint(id, idPost)),
    DeleteLikeCommint: (idLike, idComment, idPost) =>
      dispatch(DeleteLikeCommint(idLike, idComment, idPost))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LikePostComment);
