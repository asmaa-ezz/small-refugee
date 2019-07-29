import {
  GET_ALL_SUBJECT,
  ADD_POST,
  GET_POSTS,
  ADD_COMMENT,
  GET_COMMENTS,
  DELETE_POST,
  EDIT_POST,
  ADD_LIKE_POST,
  DELETE_LIKE_POST,
  DELETE_POST_COMMENT,
  EDIT_POST_COMMENT,
  ADD_LIKE_POST_COMMENT,
  DELETE_LIKE_POST_COMMENT,
} from '../actionTypes';

import { API } from '../confic'

export const GetToken = () => {
  const jwt = localStorage.getItem("token");
  return jwt;
}

export const GetAllSubject = () => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}/main/subject/`;

  const Token = GetToken();

  fetch((proxyurl + url), {
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
  })
    .then(res => res.json())
    .then(listSubject => {
      dispatch({
        type: GET_ALL_SUBJECT,
        payload: listSubject
      })
    })
};

export const AddPost = data => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}/social/post/`;

  const Token = GetToken();

  fetch((proxyurl + url), {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(dataOfPost => {
      dispatch({
        type: ADD_POST,
        payload: dataOfPost
      })
    })
};

export const GetPosts = () => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}/social/post/`;

  const Token = GetToken();

  fetch((proxyurl + url), {
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
    body: JSON.stringify()
  })
    .then(res => res.json())
    .then(listPosts => {
      dispatch({
        type: GET_POSTS,
        payload: listPosts
      })
    })
};


export const GetCommentPost = id => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}/social/post/${id}/comment/`;

  const Token = GetToken();

  fetch((proxyurl + url), {
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
    body: JSON.stringify()
  })
    .then(res => res.json())
    .then(comments => {
      dispatch({
        type: GET_COMMENTS,
        payload: { id, comments }
      })
    })
};

export const AddCommentPost = data => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}/social/comment/`;

  const Token = GetToken();

  const { id } = data;

  fetch((proxyurl + url), {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(comment => {
      dispatch({
        type: ADD_COMMENT,
        payload: { id, comment }
      })
    })
};


export const DeletePost = id => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}social/post/${id}/`;

  const Token = GetToken();

  fetch((proxyurl + url), {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
  })
    .then(() => {
      dispatch({
        type: DELETE_POST,
        payload: id
      })
    })
};

export const EditPost = (id, text) => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}social/post/${id}/`;

  const Token = GetToken();

  const data = {
    text: text,
  }
  fetch((proxyurl + url), {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(newPost => {
      dispatch({
        type: EDIT_POST,
        payload: newPost
      })
    })
};

export const AddLike = (idPost) => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}social/post-like/`;

  const Token = GetToken();

  const data = {
    post: idPost
  }

  fetch((proxyurl + url), {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(dataPost => {
      dispatch({
        type: ADD_LIKE_POST,
        payload: dataPost
      })
    })
};
export const DeleteLike = (likeId, idPost) => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}social/post-like/${likeId}/`;

  const Token = GetToken();

  const id = idPost;

  fetch((proxyurl + url), {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
  })
    .then(() => {
      dispatch({
        type: DELETE_LIKE_POST,
        payload: id
      })
    })

};

//  _COMMENT 

export const DeletePostCommint = (idComment, idPost) => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}social/comment/${idComment}/`;

  const Token = GetToken();

  const data = {
    idPost: idPost,
    idComment: idComment
  }

  fetch((proxyurl + url), {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
  })
    .then(() => {
      dispatch({
        type: DELETE_POST_COMMENT,
        payload: data
      })
    })
};

export const EditPostCommint = (idComment, idPost, text) => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}social/comment/${idComment}/`;

  const Token = GetToken();

  const data = {
    text: text,
    post: `${API}main/post/${idPost}/`
  }

  fetch((proxyurl + url), {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(newComment => {
      dispatch({
        type: EDIT_POST_COMMENT,
        payload: newComment
      })
    })
};

export const AddLikeCommint = (idComment, idPost) => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}social/comment-like/`;

  const Token = GetToken();

  const data = {
    comment: idComment
  }

  fetch((proxyurl + url), {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(dataComment => {
      dispatch({
        type: ADD_LIKE_POST_COMMENT,
        payload: { dataComment: dataComment, idPost: idPost }

      })
    })
};
export const DeleteLikeCommint = (likeId, idComment, idPost) => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}social/comment-like/${likeId}/`;

  const Token = GetToken();

  fetch((proxyurl + url), {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
  })
    .then(() => {
      dispatch({
        type: DELETE_LIKE_POST_COMMENT,
        payload: { idComment: idComment, idPost: idPost }
      })
    })

};