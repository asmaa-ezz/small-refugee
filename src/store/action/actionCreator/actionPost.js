import { GET_ALL_SUBJECT, ADD_POST, GET_POSTS, ADD_COMMENT, GET_COMMENTS, DELETE_POST, EDIT_POST, ADD_LIKE_POST, DELETE_LIKE_POST } from '../actionTypes';
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
  // const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  // const url = `${API}`;

  // const Token = GetToken();

  // fetch((proxyurl + url), {
  //   method: 'GET',
  //   headers: {
  //     'content-type': 'application/json',
  //     "Authorization": `JWT ${Token}`,
  //   },
  //   body: JSON.stringify(data)
  // })
  //   .then(res => res.json())
  //   .then(like => {
  console.log('ccccc', idPost);

  dispatch({
    type: ADD_LIKE_POST,
    payload: idPost
  })
  // })
};
export const DeleteLike = (idPost) => dispatch => {
  // const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  // const url = `${API}`;

  // const Token = GetToken();

  // fetch((proxyurl + url), {
  //   method: 'GET',
  //   headers: {
  //     'content-type': 'application/json',
  //     "Authorization": `JWT ${Token}`,
  //   },
  //   body: JSON.stringify(data)
  // })
  //   .then(res => res.json())
  //   .then(like => {
  dispatch({
    type: DELETE_LIKE_POST,
    payload: idPost
  })
  // })
};