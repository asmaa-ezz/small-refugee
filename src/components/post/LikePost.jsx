import React, { Component } from "react";
import styled from "styled-components";
import Rating from "../../assets/image/Rating.png";
import Rating2 from "../../assets/image/Rating2.png";
import { connect } from "react-redux";
import {
  AddLike,
  DeleteLike
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

class LikePost extends Component {
  handleLike() {
    const { isLike, idPost } = this.props;
    isLike ? this.props.DeleteLike(idPost) : this.props.AddLike(idPost);
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
    AddLike: id => dispatch(AddLike(id)),
    DeleteLike: id => dispatch(DeleteLike(id))
  };
};

const mapStateToProps = state => {
  return {
    // user: state.auth.user
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikePost);
